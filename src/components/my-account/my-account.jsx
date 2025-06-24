import { Box, TextField } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Card, CardContent, CardActions, Button } from "@mui/material";

export default function MyAccount() {
  return (
    <div>
      <p className="my-6 px-4 text-gray-400">
        Home / <b className="text-black">My Account</b>
      </p>

      <Box className="flex flex-col lg:flex-row gap-4 px-5 justify-between my-10 ">
        <Box className='flex flex-col w-full lg:w-[24%] '>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography component="span">
                <b>Manage My Account</b>
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="flex flex-col gap-2">
              <Typography className="text-red-500">My Profile</Typography>
              <Typography className="text-[#636363]">Address Book</Typography>
              <Typography className="text-[#636363]">
                My Payment Options
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography component="span">
                <b>My Orders</b>
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="flex flex-col gap-2">
              <Typography className="text-[#636363]">My Returns</Typography>
              <Typography className="text-[#636363]">
                My Cancellations
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography component="span">
                <b>My WishList</b>
              </Typography>
            </AccordionSummary>
            <AccordionDetails className="flex flex-col gap-2">
              <Typography className="text-[#636363]"></Typography>
            </AccordionDetails>
          </Accordion>
        </Box>

        <Box className="lg:w-[70%] w-full  ">
          <Card elevation={3} className="rounded-lg lg:px-10 lg:py-10 py-5 px-4 flex flex-col gap-5  ">
            <CardContent className="text-[20px] text-[#DB4444] poppins leading-[28px] ">{"Profile"}</CardContent>
            <Box className="w-full flex flex-col gap-4">
              <Box
                className="flex flex-col lg:flex-row justify-between w-full  "
                component="form"
                sx={{ "& > :not(style)": { m: 1} }}
                noValidate
                autoComplete="off"
              >
                <TextField className="w-full" label="First name" />
                <TextField className="w-full" label="Last name" />
              </Box>
              <Box
                className="flex justify-between w-full flex-col lg:flex-row "
                component="form"
                sx={{ "& > :not(style)": { m: 1} }}
                noValidate
                autoComplete="off"
              >
                <TextField className="w-full" label="Email address" />
                <TextField className="w-full" label="Street address" />
              </Box>
            </Box>

            <Box
              className="w-full flex flex-col gap-4"
              component="form"
              sx={{ "& > :not(style)": { m: 1} }}
              noValidate
              autoComplete="off"
            >
              <CardContent className="poppins  ">{"Password Changes"}</CardContent>
              <TextField className="w-full" label="Current passwod" />
              <Box
                component="form"
                sx={{ "& > :not(style)": {} }}
                noValidate
                autoComplete="off"
                className="flex justify-between w-full flex-col lg:flex-row gap-2 "
              >
                <TextField className="w-full" label="New passwod" />
                <TextField className="w-full" label="Confirm new passwod" />
              </Box>
            </Box>

            <CardActions className="flex justify-end">
              <Button color="inherit">Cancel</Button>
              <Button variant="contained" color="error">
                Save Changes
              </Button>
            </CardActions>
          </Card>
        </Box>
      </Box>
    </div>
  );
}
