import { fetchNotes } from "@/lib/api";
import TagsMenu from "../TagsMenu/TagsMenu";
import css from "./Header.module.css";
import Link from "next/link";

export default async function Header() {
  const tags = ["Todo", "Work", "Personal", "Meeting", "Shopping"];

  return (
    <header className={css.header}>
      <Link href="/" aria-label="Home">
        NoteHub
      </Link>
      <nav aria-label="Main Navigation">
        <ul className={css.navigation}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <TagsMenu tags={tags} />
          </li>
        </ul>
      </nav>
    </header>
  );
}
