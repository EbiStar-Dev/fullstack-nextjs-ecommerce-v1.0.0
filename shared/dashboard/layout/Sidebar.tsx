'use client'
import Link from "next/link";
import { CloseIcon } from "../components/icons";
import { sidebarLinks } from "../config/sidebarLinks";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="dashboard-sidebar shrink-0 px-4 py-6" id="dashboard-sidebar">
      <div className="sidebar-brand flex items-center justify-between px-3 pb-6">
        <Link href="/" className="sidebar-logo font-bold text-xl">
          Star Mode
        </Link>

        <button
          type="button"
          className="sidebar-close items-center justify-center p-2"
          id="sidebar-close"
          aria-label="بستن منو"
        >
          <CloseIcon />
        </button>
      </div>

      <nav className="mt-4 flex flex-col gap-1" aria-label="منوی مدیریت">
        {sidebarLinks.map((link, index) => {
          if ('section' in link) {
            return (
              <div key={index} className="mt-6">
                <h3 className="sidebar-section-title uppercase tracking-wide px-3 mb-2 text-xs font-semibold">
                  {link.section}
                </h3>
                
                <div className="flex flex-col gap-1">
                  {link.items.map((item, itemIndex) => {
                    const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
                    
                    return (
                      <Link
                        key={itemIndex}
                        href={item.href}
                        className={`sidebar-link flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${
                          isActive ? 'sidebar-link-active' : ''
                        }`}
                      >
                        <item.icon />
                        <span className="text-sm">{item.label}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          }

          const isActive = pathname === link.href;

          return (
            <Link
              key={index}
              href={link.href}
              className={`sidebar-link flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${
                isActive ? 'sidebar-link-active' : ''
              }`}
            >
              <link.icon />
              <span className="text-sm font-medium">{link.label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}