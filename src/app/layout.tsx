import React from "react";

import {NextIntlClientProvider, useMessages} from 'next-intl';
export default function RootLayout({
  children,
    params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params:{ locale: string };
}>) {
  const messages = useMessages();
  return (
      <NextIntlClientProvider locale={locale} messages={messages}>
        {children}
      </NextIntlClientProvider>

  );
}
