import { Box, Button, Card, CardContent, Chip, Skeleton, Stack, ThemeProvider, Typography } from "@mui/material"
import { BaseKey, useDelete, useGetIdentity, useList, useOne } from "@refinedev/core"
import { useColorMode } from "contexts/color-mode"
import { headerTheme } from "contexts/theme"
import { IUser } from "pages/home"
import InterestsIcon from '@mui/icons-material/Interests';

const interests = [
  {
    id: 1,
    name: 'all about love',
    activity: 'read',
    category: 'book',
    date: '2022-04-17'
  },
  {
    id: 2,
    name: 'art of loving',
    activity: 'read',
    category: 'book',
    date: '2022-04-25',
  }
]

type InterestsType = typeof interests

const InterestsList = () => {
  const { data: user } = useGetIdentity<IUser>()
  const { mode } = useColorMode()

  const { mutate: deleteInterest } = useDelete()


  const { data, isLoading, isError } = useList({
    resource: 'interests',
    filters: [
      {
        field: 'userId',
        operator: 'eq',
        value: user?.id
      }
    ]
  })

  function handleDeleteInterest(id: BaseKey) {
    deleteInterest({
      resource: 'interests',
      id,
      successNotification: (data, id, resource) => {
        return {
          type: 'success',
          message: 'Interest deleted!'
        }
      },
      errorNotification: (data, id, resource) => {
        return {
          type: 'error',
          message: 'Could not delete interest, try again.'
        }
      }
    })
  }

  const interests = data?.data ?? [] as InterestsType

  if (isLoading) {
    return (
      <Box sx={{ paddingTop: '1em', paddingLeft: '1em', paddingRight: '1em' }}>
        <ThemeProvider theme={headerTheme}>
          <Typography sx={{ fontSize: '1.5rem', fontWeight: '600', mb: 2 }}>
            Your Saved Interests
          </Typography>
        </ThemeProvider>
        <Stack spacing={2}>
          <Skeleton variant="rounded" width="full" height={80} />
          <Skeleton variant="rounded" width="full" height={80} />
        </Stack>
      </Box>
    )
  }

  if (isError) {
    return <>An Error occured, please try again later</>
  }

  if (!interests) {
    return (
      <Box sx={{ paddingTop: '1em', paddingLeft: '1em', paddingRight: '1em' }}>
        <ThemeProvider theme={headerTheme}>
          <Typography sx={{ fontSize: '1.5rem', fontWeight: '600', mb: 2 }}>
            Your Saved <Chip color="primary" icon={<InterestsIcon />} size="medium" label="Interests" />
          </Typography>
        </ThemeProvider>
        <Stack spacing={2}>
          <Typography>No Interests yet...</Typography>
        </Stack>
      </Box>
    )
  }

  return (
    <Box sx={{ paddingTop: '1em', paddingLeft: '1em', paddingRight: '1em' }}>
      <ThemeProvider theme={headerTheme}>
        <Typography sx={{ fontSize: '1.5rem', fontWeight: '600', mb: 2 }}>
          Your Saved <Chip color="primary" icon={<InterestsIcon />} size="medium" label="Interests" />
        </Typography>
      </ThemeProvider>
      <Stack spacing={2}>
        {interests.map((interest) => (
          <Card key={interest.name} sx={{
            backgroundColor: `${mode === 'dark' ? 'unset' : ""}`,
            border: `${mode === 'dark' ? '1px solid' : ""}`,
            position: 'relative',
            borderRadius: '20px'
          }}>
            <CardContent>
              <Stack sx={{
                position: 'relative'
              }} direction="row" justifyContent="space-between">
                <Stack direction="row" spacing={2}>
                  <Typography sx={{
                    fontSize: {
                      sm: 10,
                      lg: 18
                    }, textTransform: 'capitalize'
                  }} color="text.primary" gutterBottom>
                    {interest.name}
                  </Typography>
                  <Chip size="small" color="primary" label={interest.activity} />
                </Stack>
                <Button sx={{
                  width: '0.8rem',
                  positon: 'absolute',
                  position: {
                    xs: 'absolute',
                    lg: 'relative',
                  },
                  bottom: {
                    xs: -40,
                    lg: 0
                  },
                  right: 0
                }} size="small" aria-label="Delete" variant="contained" onClick={() => handleDeleteInterest(interest.id!)} >Delete</Button>
              </Stack>
              <Typography sx={{
                color: `${mode === 'dark' ? "#fff" : "#000"}`,
                mb: 1
              }} color="text.primary">
                Category:
                <Typography sx={{
                  color: `${mode === 'dark' ? "#5baffa" : "#000"}`
                }} component="span"> {interest.category}</Typography>
              </Typography>
              <Typography sx={{
                color: `${mode === 'dark' ? "#fff" : "#000"}`
              }} color="text.primary">
                Date:
                <Typography sx={{
                  color: `${mode === 'dark' ? "#5baffa" : "#000"}`
                }} component="span"> {interest.date}</Typography>
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Stack>
      <Stack textAlign="center" sx={{ mt: 2 }}>
        <Typography>That's all 🎉</Typography>
      </Stack>
    </Box >
  )
}
export { InterestsList }
