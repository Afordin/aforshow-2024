/* eslint-disable @next/next/no-img-element */
import { useCursors } from "app/cursors-context";
import { Button } from "./ui/button";
import Logo from "app/components/icons/Logo";
import { cn } from "./utils";

export const Nav = () => {
  const { cursors, disabled, setDisabled } = useCursors();

  const slice = 3;
  const cursorsSlice = cursors.slice(-slice);

  const imgCircleClass = cn('relative rounded-full h-8 w-8 ring-2 ring-white overflow-hidden group-hover:ring-[3px]')

  return (
    <nav className="relative px-2 w-full max-w-6xl h-16 mx-auto flex items-center justify-between">
      <a href="/" className="flex items-center gap-1 cursor-pointer">
        <Logo />
        <h1 className="text-2xl text-white font-semibold">Aforshow</h1>
      </a>
      <div className="flex items-center gap-5 h-full">
        <div
          className={cn('group flex -space-x-3 hover:cursor-pointer overflow-hidden p-2', {"opacity-70": disabled})}
          onClick={() => {
            if (setDisabled) setDisabled((prev) => !prev);
          }}>
          {
            cursorsSlice.map((cursor) => (
              <div key={cursor.id} className={imgCircleClass}>
                <img className="scale-[1.7] absolute top-0 left-0" src={cursor.flagUrl} alt="" />
              </div>
            ))
          }
          {
            cursors.length > slice && (
              <div className={cn(imgCircleClass, 'flex items-center justify-center bg-[#121112]')}>
                <span className="text-white font-semibold">+{cursors.length - slice}</span>
              </div>
            )
          }
        </div>
        <Button>Inscribirse</Button>
      </div>
    </nav>
  );
};
