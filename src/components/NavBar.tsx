import Link from "next/link";

export const NavBar = () => {
  return (
    <div className="navbar bg-primary">
      <div className="flex-1">
        <Link href="#" className="btn btn-ghost text-xl">
          daisyUI
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="#">Link</Link>
          </li>
          <li>
            <details>
              <summary>Switch</summary>
              <ul className="bg-primary rounded-t-none p-2">
                <li>
                  <Link href="#">Link 1</Link>
                </li>
                <li>
                  <Link href="#">Link 2</Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};
