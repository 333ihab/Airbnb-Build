"use client";

import { SafeUser } from "@/types";
import Container from "../Container";
import Logo from "@/components/shared/layout/navbar/Logo";
import Search from "@/components/shared/layout/navbar/Search";
import UserMenu from "@/components/shared/layout/navbar/UserMenu";
import Categories from "@/components/shared/layout/navbar/Categories";

type Props = {
  currentUser?: SafeUser | null;
};

function Navbar({ currentUser }: Props) {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo />
            <Search />
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
      <Categories />
    </div>
  );
}

export default Navbar;
