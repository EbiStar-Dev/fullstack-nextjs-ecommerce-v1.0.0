import ClientLayout from "@/shared/client/layout/ClientLayout";
import "@/assets/css/style.css"

export default function Layout({children}) {
  return (
    <ClientLayout>{children}</ClientLayout>
  );
}