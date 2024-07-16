"use client"
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useTheme } from "next-themes";
export default function Darkmode() {
  const {theme, setTheme, systemTheme} = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme 
  return (
    <div>
     {currentTheme === 'dark' ? <MdLightMode onClick={()=>setTheme('light')} className="text-xl cursor-pointer hover:text-amber-400"/> :<MdDarkMode onClick={()=>setTheme('dark')} className="text-xl cursor-pointer hover:text-amber-400"/>}
    </div>
  )
}
