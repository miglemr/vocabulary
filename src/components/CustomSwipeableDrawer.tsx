'use client'

import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import Box from '@mui/material/Box'

import RoundedDiv from '@/components/RoundedDiv'

function CustomSwipeableDrawer({
  children,
  icon,
}: {
  children: React.ReactNode
  icon: React.ReactNode
}) {
  const [open, setOpen] = useState(false)

  const isMobile = useMediaQuery({ query: '(max-width: 640px)' })

  useEffect(() => {
    !isMobile && setOpen(false)
  }, [isMobile])

  return (
    <div>
      <button onClick={() => setOpen(true)}>
        <RoundedDiv>{icon}</RoundedDiv>
      </button>

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
            <span className="text-sm">Done</span>
          </button>
          {children}
        </Box>
      </SwipeableDrawer>
    </div>
  )
}

export default CustomSwipeableDrawer
