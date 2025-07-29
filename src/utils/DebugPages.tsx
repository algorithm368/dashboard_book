import { useEffect } from "react";
import { getPageReadPerMonth } from "../utils/getPageReadPerMonth";

export default function DebugPages() {
  useEffect(() => {
    getPageReadPerMonth().forEach((m) => {
      console.log(`${m.month} ${m.year}: ${m.pages} pages`);
    });
  }, []);
  return null;
}