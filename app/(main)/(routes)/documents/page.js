"use client";

import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react";
import { PlusCircleIcon } from "lucide-react";
import Image from "next/image";

const DocumentPage = () => {
    const user = useUser();
    console.log("USER",user)
    return ( 
        <>
        <div className="h-full flex items-center justify-center flex-col space-y-4">
            <Image className="dark:hidden" alt='empty' src='/empty.png' width={300} height={300}/>
            <Image className="hidden dark:block" alt='empty' src='/empty-dark.png' width={300} height={300}/>
            <h2 className="text-lg font-medium">Welcome to {user?.user.firstName}'s Jotion</h2>
            <Button><PlusCircleIcon className="h-4 w-4 mr-2" />Create a note</Button>
        </div>
        </>
     );
}
 
export default DocumentPage;