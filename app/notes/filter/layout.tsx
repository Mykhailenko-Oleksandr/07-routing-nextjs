import { ReactNode } from "react";

interface NotesLayoutProps {
  children: ReactNode;
  sidebar: ReactNode;
}

const NotesLayout = ({ children, sidebar }: NotesLayoutProps) => {
  return (
    <section>
      <aside>{sidebar}</aside>
      <div>{children}</div>
    </section>
  );
};

export default NotesLayout;
