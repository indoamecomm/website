import {RefObject, useEffect} from "react";

export const useScript = (url: string, ref: RefObject<HTMLDivElement>) => {
	useEffect(() => {
		const script = document.createElement("script");

		script.src = url;
		script.defer = false;
		script.async = false;
		
		if (ref.current) {
			ref.current.appendChild(script);
		}
	}, [url, ref]);
};
