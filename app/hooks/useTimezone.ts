import { useEffect, useState } from "react"

export const useTime = ({ timestamp }: { timestamp: number}): string | null => {
	const [time, setTime] = useState<string | null>(null);

	useEffect(() => {
		if (!timestamp) return;

		const timeFormatConfig: Intl.DateTimeFormatOptions = {
			hour: '2-digit',
			minute: '2-digit',
			hour12: false,
		};

		const startAt = new Date(timestamp).toLocaleTimeString([], timeFormatConfig);
		setTime(startAt);
	}, [timestamp]);

	return time;
};

export const useTimezone = (): string | null => {
	const [timezone, setTimezone] = useState<string | null>(null);

	useEffect(() => {
		const currentTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
		setTimezone(currentTimezone);
	}, []);

	return timezone;
};