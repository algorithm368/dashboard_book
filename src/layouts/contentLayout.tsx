interface ContentLayoutProps {
  children: React.ReactNode;
}

const ContentLayout: React.FC<ContentLayoutProps> = ({ children }) => (
  <div className="px-[160px] py-[20px] box-border bg-[#FFFFF]">{children}</div>
);

export default ContentLayout;
