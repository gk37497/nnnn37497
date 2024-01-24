
import { ModeToggle } from "@/components/theme-provider/theme-changer";
import { CommandMenu } from "./command-menu";

export default function NavBar() {
     return(
          <div className="flex space-x-2">
               <ModeToggle />
               <CommandMenu />
          </div>
     )
}