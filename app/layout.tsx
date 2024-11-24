import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { AntdProvider, Providers } from './providers';

dayjs.extend(localizedFormat);
dayjs.locale('zh-cn');

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '山有扶苏',
  description: '祝大家身体健康，万事如意',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 不加 suppressHydrationWarning 时 NextThemesProvider 会导致警告
    <html lang="zh" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <AntdProvider>
            {/* {children} */}
            {/* <BasicNavigationHeader /> */}
            <div className="mx-auto max-w-7xl p-4">{children}</div>
            {/* <BannerNotice /> */}
          </AntdProvider>
        </Providers>
      </body>
    </html>
  );
}
