"use client";
import MainWrapper from "@/components/MainWrapper";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const {data:session} = useSession()

  if(!session){
    return (
      <MainWrapper>
        <div>
          <button className="text-slate-200 bg-slate-900 p-4 rounded-lg" onClick={() => { signIn("google") }}>Log In</button>
        </div>
      </MainWrapper>
    )
  }

  return (
    <MainWrapper>
      <div className="flex flex-col">
        <div>Hallo {session.user?.name}</div>
        <button className="text-slate-200 bg-slate-900 p-4 rounded-lg" onClick={() => { signOut() }}>Sign Out</button>
      </div>      
    </MainWrapper>
  )
}
