interface ContentLayoutProps {
  children: React.ReactNode;
}

const ContentLayout: React.FC<ContentLayoutProps> = ({ children }) => (
  <div className="px-[160px] py-[20px] box-border bg-[#E5E8EB]">{children}</div>
);

export default ContentLayout;
