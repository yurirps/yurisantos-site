import { NavLinks } from "./navlinks";

export function MenuMobile({
  open,
  closeMenu,
}: {
  open: boolean;
  closeMenu: () => void;
}) {
  if (!open) return null;

  return (
    <ul className="md:hidden flex flex-col items-center bg-background border-t border-border py-4 space-y-4">
      <NavLinks onClick={closeMenu} />
    </ul>
  );
}
