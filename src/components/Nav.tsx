import { useState } from "react";
import Bars from "./icons/bars";
import Times from "./icons/times";
import type { MenuItem } from "emdash";

export interface NavProps {
  items: MenuItem[];
}

export default function Nav({ items }: NavProps) {
  const [open, setOpen] = useState(false);
  const title = "BriAnn's Suzuki Studio";
  return (
    <>
      <div id="nav-toggle">
        <button
          onClick={() => {
            setOpen((prev) => !prev);
          }}
        >
          <Bars />
        </button>
        <span className="title">{title}</span>
      </div>
      <nav id="nav" className={open ? "open" : undefined}>
        <div id="nav-close">
          <button onClick={() => setOpen(false)}>
            <Times />
          </button>
        </div>
        <ul>
          {items.map((item) => (
            <li key={item.id} className={item.children.length > 0 ? "nav-nested" : undefined}>
              <a href={item.url} target={item.target}>
                {item.label}
              </a>
              {item.children.length > 0 && (
                <ul>
                  {item.children.map((child) => (
                    <li key={child.id}>
                      <a href={child.url} target={child.target}>
                        {child.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
