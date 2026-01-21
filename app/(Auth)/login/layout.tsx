import React from 'react'

export const LoginLayout = ({
  children,
}:{children:React.ReactNode}) => {
  return (
    <html lang="en">
      <body>
        {children}
        <footer>this is only for regiser</footer>
      </body>
    </html>
  )
}

export default LoginLayout