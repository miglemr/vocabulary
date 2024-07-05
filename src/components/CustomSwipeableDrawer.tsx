'use client'

import { useState } from 'react'

import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import Box from '@mui/material/Box'

function CustomSwipeableDrawer({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <button onClick={() => setOpen(true)}>📃</button>
      <SwipeableDrawer
        anchor="bottom"
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        PaperProps={{
          sx: {
            borderTopLeftRadius: '8px',
            borderTopRightRadius: '8px',
          },
        }}
      >
        <Box
          sx={{
            p: 2,
            height: '90vh',
          }}
          role="presentation"
          onClick={() => setOpen(false)}
          onKeyDown={() => setOpen(false)}
        >
          <button onClick={() => setOpen(false)} className="mb-4">
            Done
          </button>
          {children}
        </Box>
      </SwipeableDrawer>
    </div>
  )
}

export default CustomSwipeableDrawer
