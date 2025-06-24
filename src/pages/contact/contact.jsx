import { Box, Paper, TextField, Button, Typography } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
export default function Contact() {
  return (
    <div>
      <p className="my-6 px-4 text-gray-400">
        Home / <b className="text-black">Contact</b>
      </p>

      <Paper elevation={3} className="p-6 lg:p-10 rounded-lg my-10 w-[90%] m-auto lg:w-full ">
        <Box className="flex flex-col lg:flex-row gap-10">
          <Box className="flex flex-col gap-6 w-full lg:w-1/3">
            <Box className="flex gap-4 items-start">
              <PhoneIcon className="text-red-500 mt-1" />
              <Box className='flex flex-col gap-3'>
                <Typography variant="h6" className="font-semibold">
                  Call To Us
                </Typography>
                <Typography>We are available 24/7, 7 days a week.</Typography>
                <Typography>Phone: +8801611112222</Typography>
              </Box>
            </Box>

            <Box className="flex gap-4 items-start">
              <MailIcon className="text-red-500 mt-1" />
              <Box className='flex flex-col gap-3'>
                <Typography variant="h6" className="font-semibold">
                  Write To US
                </Typography>
                <Typography>
                  Fill out our form and we will contact you within 24 hours.
                </Typography>
                <Typography>Email: customer@exclusive.com</Typography>
                <Typography>Email: support@exclusive.com</Typography>
              </Box>
            </Box>
          </Box>

          <Box className="w-full lg:w-2/3 flex flex-col gap-6">
            <Box className="flex flex-col md:flex-row gap-4">
              <TextField fullWidth placeholder="Name" />
              <TextField fullWidth placeholder="Email" />
              <TextField fullWidth placeholder="Phone" />
            </Box>
            <TextField
              multiline
              rows={4}
              fullWidth
              placeholder="Your Message"
            />
            <Box className="flex justify-end">
              <Button variant="contained" color="error" className="px-10">
                Send Message
              </Button>
            </Box>
          </Box>
        </Box>
      </Paper>
    </div>
  );
}
