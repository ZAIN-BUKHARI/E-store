import { Grid, ThemeProvider } from "@mui/material";
import BlogCard from "../src/components/dashboard/BlogCard";
import SalesOverview from "../src/components/dashboard/SalesOverview";
import DailyActivity from "../src/components/dashboard/DailyActivity";
import ProductPerfomance from "../src/components/dashboard/ProductPerfomance";
import FullLayout from "../src/layouts/FullLayout";
import theme from "../src/theme/theme";





export default function Index(admin) {
  return (
    
    <ThemeProvider theme={theme}>
    <style jsx global>{`
      footer{
      display:none;
        }
    `}</style>
    { !admin.admin.value && <h1 className='text-3xl text-pink-500 my-5 text-center'>Only z-wear admins allow here</h1>}
    { admin.admin.value &&  <FullLayout>
    <Grid container spacing={0}>
      <Grid item xs={12} lg={12}>
        <SalesOverview />
      </Grid>
      {/* ------------------------- row 1 ------------------------- */}
      <h1 className="text-3xl font-bold text-pink-500 text-center ml-[500px]" >Admins</h1>
      <Grid item xs={12} lg={12}>
        <BlogCard />
      </Grid>
      <Grid item xs={12} lg={4}>
        <DailyActivity />
      </Grid>
      {/* <Grid item xs={12} lg={8}>
        <ProductPerfomance admin={admin} />
      </Grid> */}
    </Grid>
    </FullLayout>}
    
    </ThemeProvider>
    
  );
}
