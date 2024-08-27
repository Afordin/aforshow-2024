"use client";

import { useState, useEffect, useContext, createContext, useRef, Dispatch, SetStateAction } from "react";
import usePartySocket from "partysocket/react";
import twemoji from "twemoji";

type Position = {
  x: number;
  y: number;
  pointer: "mouse";
};

export type Cursor = Position & {
  id: string;
  country: string | null;
  flag: string;
  flagUrl: string;
  lastUpdate: number;
};

type OtherCursorsMap = {
  [id: string]: Cursor;
};
interface CursorsContextType {
  cursors: Array<Cursor>
  disabled: boolean | null
  setDisabled: Dispatch<SetStateAction<boolean>> | null
}

export const CursorsContext = createContext<CursorsContextType>({
  cursors: [],
  disabled: null,
  setDisabled: null,
});

export function useCursors() {
  return useContext(CursorsContext);
}

function getFlagEmoji(countryCode: string) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
}

export default function CursorsContextProvider(props: {
  host: string;
  room: string;
  children: React.ReactNode;
}) {
  const [disabled, setDisabled] = useState<boolean>(false);
  const [dimensions, setDimensions] = useState<{
    width: number;
    height: number;
  }>({ width: 0, height: 0 });

  const socket = usePartySocket({
    host: props.host,
    room: props.room,
  });
  const [others, setOthers] = useState<OtherCursorsMap>({});

  const cursors: Cursor[] = Object.entries(others).map(([id, cursor]): Cursor => {
    const flag = cursor.country ? getFlagEmoji(cursor.country) : "";

    const flagAsImage = twemoji.parse(flag,
      {
        base: 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/'        
      })

      const flagUrl = flagAsImage.match(/src="([^"]+)"/)?.[1] || "";

      return {
        ...cursor,
        id,
        flag: flagAsImage,
        flagUrl: flagUrl,
      }
  });

  useEffect(() => {
    if (socket) {
      const onMessage = (evt: WebSocketEventMap["message"]) => {
        const msg = JSON.parse(evt.data as string);
        switch (msg.type) {
          case "sync":
            const newOthers = { ...msg.cursors };
            setOthers(newOthers);
            break;
          case "update":
            const other = {
              x: msg.x,
              y: msg.y,
              country: msg.country,
              lastUpdate: msg.lastUpdate,
              pointer: msg.pointer,
            };
            setOthers((others) => ({ ...others, [msg.id]: other }));
            break;
          case "remove":
            setOthers((others) => {
              const newOthers = { ...others };
              delete newOthers[msg.id];
              return newOthers;
            });
            break;
        }
      };
      socket.addEventListener("message", onMessage);

      return () => {
        // @ts-ignore
        socket.removeEventListener("message", onMessage);
      };
    }
  }, [socket]);

  // Track window dimensions
  useEffect(() => {
    const onResize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", onResize);
    onResize();
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // Always track the mouse position
  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!socket) return;
      if (!dimensions.width || !dimensions.height) return;
      const position = {
        x: e.clientX / dimensions.width,
        y: e.clientY / dimensions.height,
        pointer: "mouse",
      } as Position;
      socket.send(JSON.stringify(position));
    };
    window.addEventListener("mousemove", onMouseMove);    

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [socket, dimensions]);

  return (
    <CursorsContext.Provider value={{ cursors, disabled, setDisabled }}>
      {props.children}
    </CursorsContext.Provider>
  );
}
