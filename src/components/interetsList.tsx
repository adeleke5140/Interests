import { Box, Card, CardContent, Chip, Paper, Stack, ThemeProvider, Typography } from "@mui/material"
import { useColorMode } from "contexts/color-mode"
import { headerTheme } from "contexts/theme"

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

const InterestsList = () => {
  const { mode } = useColorMode()
  return <>
    <Box sx={{ paddingTop: '1em', paddingLeft: '1em', paddingRight: '1em' }}>
      <ThemeProvider theme={headerTheme}>
        <Typography sx={{ fontSize: '1.5rem', fontWeight: '600', mb: 2 }}>
          Your Saved Interests
        </Typography>
      </ThemeProvider>
      <Stack spacing={2}>
        {interests.map((interest) => (
          <Card sx={{
            backgroundColor: `${mode === 'dark' ? 'unset' : ""}`,
            border: `${mode === 'dark' ? '1px solid' : ""}`,
          }}>
            <CardContent>
              <Stack direction="row" justifyContent="space-between">
                <Typography sx={{ fontSize: 18, textTransform: 'capitalize' }} color="text.primary" gutterBottom>
                  {interest.name}
                </Typography>
                <Chip color="primary" label={interest.activity} />
              </Stack>
              <Typography sx={{
                color: `${mode === 'dark' ? "#5baffaf" : "rgba(0, 0, 0, 0.6)"}`
              }} color="text.secondary">
                Date: {interest.date}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Stack>
      <Stack textAlign="center" sx={{ mt: 2 }}>
        <Typography>Load More</Typography>
      </Stack>
    </Box>
  </>
}
export { InterestsList }
