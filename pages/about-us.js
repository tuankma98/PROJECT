import { Box, CardMedia, Container, Typography } from "@mui/material";
import Copyright from "../components/CopyRight";
import DefaultLayout from "../layouts/default";
import { Grid } from "@mui/material";
import UserCards from "../components/userCard/UserCard";

function AboutUs() {
  return (
    <Box
      component="main"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[900],
        flexGrow: 1,
        height: "100vh",
        overflow: "auto",
      }}
    >
      {/* <Container > */}
      <Box className="about-orientation" sx={{ mt: 8 }}>
        <Container className="about-orientation-container">
          <Grid container>
            {/* orientation */}
            <Grid lg={6} className="about-orientation__image">
              <CardMedia
                component="img"
                height="385"
                width="100%"
                image="data:image/jpeg;base64,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"
                alt="Paella dish"
              />
            </Grid>

            <Grid lg={6} className="about-orientation__introtext">
              <Typography variant="h3" component="h2">
                B???N C?? BI???T?
              </Typography>
              <Typography variant="body1" gutterBottom>
                Ngo??i kia c?? r????t nhi????u ba??n l??m sai ngh????, tu?? duy an ph?????n v?? bi??
                ch??n ch??n v????i m?????t c??ng vi?????c kh??ng ??u?? vui, kh??ng ??u?? s????ng, c??c b???n
                ???y g?????p h????t khu??ng hoa??ng tu????i n??y t????i tu????i kia.
              </Typography>
              <Typography variant="body1" gutterBottom>
                Tu???i 22 ??ang ng??? ng??ng kh??ng bi????t m??nh n??n l??m ngh???? g??. Tu???i 28
                th?? b??ng ho??ng kh??ng bi????t lu??o??ng nh?? m??nh th?? l?????p gia ????nh v??
                nu??i d???y con c??i l??m sao. Tu????i 40 nu???i ti???c thanh xu??n cu??a m??nh
                li???u c?? ph???i ???? ph?? ho??i kh??ng nhi??....
              </Typography>
            </Grid>

            <Grid className="about-orientation__introtext-second">
              <Typography variant="body1" gutterBottom>
                Mo??i chuy?????n s??? r????t kh??c n????u ho?? ???????c ??i??nh hu??????ng c??ng vi?????c ph?? h????p,
                bi???t c??ch ?????t cho m??nh m???t m???c ti??u r?? r??ng v?? c?? ??????y ??u?? ki?? na??ng
                c???n thi???t ????? ph??t tri???n s??? nghi???p.
              </Typography>
              <Typography variant="body1" gutterBottom>
                Ch??ng t??i tin r????ng con ngu??????i Vi?????t Nam kh??ng h???? thua k??m g?? so v????i con
                ng?????i ??? b???t c??? n??i ????u. Con r????ng ch??u ti??n ho??n to??n c?? th???? tr????
                th??nh c??ng d??n to??n c????u ????? s??nh vai c??ng c??c cu??????ng qu????c na??m
                ch??u.
              </Typography>
              <Typography variant="body1" gutterBottom>
                Ch??ng t??i mong mu????n tr???? th??nh m?????t t???? ch????c g??p ph????n ta??o n??n s???? thay ??????i
                ????, v?? vi???c t???o ra c???ng ?????ng h???c l???p tr??nh m???i chi?? l?? ??i????m b????t
                ??????u. Ch??ng t??i ??ang n??? l???c t???o ra c??c kh??a h???c c?? n???i dung ch???t
                l?????ng v?????t tr???i, gi??p h???c vi??n sau khi ho??n th??nh kh??a h???c c??
                th??? tr??? th??nh nh???ng l???p tr??nh vi??n lu??n ???????c nhi???u c??ng ty s??n
                ????n.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Strategy */}
      <Box className="about-strategy">
        <Container className="about-strategy-container">
          <Grid container>
            <Box className="about-strategy__content">
              <Typography
                variant="h3"
                gutterBottom
                component="div"
                className="about__heading"
              >
                CHI???N L?????C PH??T TRI???N
              </Typography>
              <Typography
                variant="h6"
                gutterBottom
                component="h4"
                className="about-receive__heading"
              >
                1. Coi tr???ng ????o t???o v?? ph??t tri???n nh??n t??i
              </Typography>
              <Typography variant="body1" gutterBottom>
                T??i tin r???ng s???n ph???m tuy???t v???i ch??? c?? th??? t???o ra b???i nh???ng con
                ng?????i t??i n??ng. C??ng ty mu???n t??ng tr?????ng nhanh b???n v???ng ph???i c??
                nh???ng nh??n s??? xu???t s???c c?? t??m, c?? t??i. V?? v???y, ch??ng t??i kh??ng ng???ng
                t??m ki???m v?? ph??t tri???n nh???ng c?? nh??n t??i n??ng c??ng x??y d???ng b???
                m??y. N???u b???n mu???n ???????c l??m c??ng v???i nh???ng ng?????i gi???i giang kh??c?
                B???n mu???n ???????c ch??? ?????ng quy???t ?????nh trong c??ng vi???c c???a m??nh? V??
                b???n mu???n ???????c t????ng th?????ng x???ng ????ng? H??y v??? v???i ch??ng t??i ????
              </Typography>
              <Box className="about-receive-block">
                <Box className="about-receive-block__text">
                  <Typography
                    variant="h6"
                    gutterBottom
                    component="h4"
                    className="about-receive__heading"
                  >
                    2. S???n ph???m l??m ra l?? ph???i ch???t l?????ng, l?? ph???i b??n ???????c
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    ch??ng t??i l??m ra nh???ng s???n ph???m ph???c v??? th??? tr?????ng l???n, ch???t l?????ng
                    v?? hi???u qu??? th???c s???, ????p ???ng nhu c???u c???p thi???t c???a h???c vi??n.
                    M????i kh??a h???c, m????i b??i gia??ng cu??a ch??ng t??i kh??ng pha??i ??u??????c l??m ra
                    b????i chi?? m?????t ng?????i. M?? ???? l?? t????ng ho?? chuy??n m??n cu??a ngu??????i
                    da??y, sales, marketing, l?????p tr??nh vi??n, ??a??o di????n h??nh a??nh v??
                    ??m thanh??? Kh??c n??o cu??ng pha??i c???? benchmarking, t??? tin ?????ng
                    c???nh c??c s???n ph???m c???a th??? gi???i. T????c l?? l??m m?????t c??ch th??ng
                    minh v?? x??u chu????i nhi????u loa??i hi????u bi????t kh??c nhau.
                  </Typography>
                </Box>
                <CardMedia
                  component="img"
                  height="310"
                  width="100%"
                  image="https://static.fullstack.edu.vn/static/media/about-1.c8179beb513c0a025314.png"
                  alt="Paella dish"
                />
              </Box>
              <Box className="about-receive-block">
                <Box className="about-receive-block__text">
                  <Typography
                    variant="h6"
                    gutterBottom
                    component="h4"
                    className="about-receive__heading"
                  >
                    3. T???p trung v??o kh??ch h??ng
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Khi h???c l???p tr??nh ph???n ????ng h???c vi??n d??? b??? m???t ?????nh h?????ng,
                    d??? n???n khi g???p kh?? kh??n m?? kh??ng ai gi??p ?????, nhi???u khi th???y
                    l??m gi???ng h???t video r???i m?? kh??ng ch???y... T???i ch??ng t??i, ch??ng t??i
                    th???u hi???u nh???ng kh?? kh??n c???a c??c b???n, ch??ng t??i n??? l???c t???o
                    ra gi??o tr??nh v?? h??? th???ng b??i t???p, h??? th???ng h??? tr??? c??c b???n
                    t???i ??a trong qu?? tr??nh h???c t???p.
                  </Typography>
                </Box>
                <CardMedia
                  component="img"
                  height="310"
                  width="100%"
                  image="https://static.fullstack.edu.vn/static/media/about-2.9172a49089c8c29156f7.png"
                  alt="Paella dish"
                />
              </Box>
              <Box className="about-receive-block">
                <Box className="about-receive-block__text">
                  <Typography
                    variant="h6"
                    gutterBottom
                    component="h4"
                    className="about-receive__heading"
                  >
                    4. B??n h??ng v?? ch??m s??c kh??ch h??ng b???n v???ng
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Vi???c b??n h??ng s??? tr??? n??n r???t d??? d??ng khi kh??ch h??ng s??? d???ng
                    hi???u qu??? v?? truy???n tai nhau v??? s???n ph???m. Th??nh c??ng v??? m???t
                    doanh s??? kh??ng quan tr???ng b???ng vi???c ng?????i h???c ????nh gi?? cao
                    s???n ph???m sau ???? ti???p t???c s??? d???ng, th???m ch?? c??n gi???i thi???u
                    cho ng?????i th??n v?? b???n b??. ch??ng t??i l?? m???t trong nh???ng c??ng ty gi??o
                    d???c, c?? l??? l?? duy nh???t ?????u t?? r???t nhi???u ng??n s??ch v??o vi???c
                    ch??m s??c kh??ch h??ng, thay v?? b??? ti???n ??i ????nh b??ng t??n tu???i.
                    ch??ng t??i s??? t??m m???i c??ch ????? d???n ?????t ???????c con s??? 99% kh??ch h??ng h??i
                    l??ng. 1% c??n l???i l?? nh???ng con ng?????i c???a ch??ng t??i, ch??ng t??i kh??ng
                    cho ph??p b???n th??n m??nh c???m th???y h??i l??ng ho??n to??n v??? s???n
                    ph???m. ???? ch??nh l?? ?????ng l???c ????? ch??ng t??i li??n t???c c???i thi???n,
                    li??n t???c ph??t tri???n v?? t???o ra c??c s???n ph???m h??? tr??? h???c t???p
                    ch???t l?????ng cho c???ng ?????ng.
                  </Typography>
                </Box>
                <CardMedia
                  component="img"
                  height="310"
                  width="100%"
                  image="https://static.fullstack.edu.vn/static/media/about-3.61ca6adf22cc550c0c03.png"
                  alt="Paella dish"
                />
              </Box>
            </Box>
          </Grid>
        </Container>
      </Box>

      {/* receive */}
      <Box className="about-receive">
        <Container className="about-receive-container">
          <Grid container className="about-receive-grid">
            <Box className="about-receive__content">
              <Typography
                variant="h3"
                gutterBottom
                component="div"
                className="about__heading"
              >
                B???n nh???n ???????c g?? t??? ch??ng t??i?
              </Typography>
              <Box className="about-receive__grid">
                <Box className="about-receive__gridItem">
                  <Typography
                    variant="h6"
                    gutterBottom
                    component="h4"
                    className="about-receive__heading"
                  >
                    1. S???? th??nh tha??o
                  </Typography>{" "}
                  C??c b??i h???c ??i ????i v???i th???c h??nh, l??m b??i ki???m tra ngay tr??n
                  trang web v?? b???n lu??n c?? s???n ph???m th???c t??? sau m???i kh??a h???c.
                </Box>
                <Box className="about-receive__gridItem">
                  <Typography
                    variant="h6"
                    gutterBottom
                    component="h4"
                    className="about-receive__heading"
                  >
                    2. T??nh t???? ho??c
                  </Typography>{" "}
                  M?????t con ngu??????i chi?? th????c s???? tru??????ng th??nh trong s???? nghi?????p n????u ho??
                  bi????t c??ch t??? thu na??p ki????n th????c m????i cho ch??nh m??nh.
                </Box>
                <Box className="about-receive__gridItem">
                  <Typography
                    variant="h6"
                    gutterBottom
                    component="h4"
                    className="about-receive__heading"
                  >
                    3. Ti???t ki???m th???i gian
                  </Typography>{" "}
                  Thay v?? ch???t v???t v??i n??m th?? ch??? c???n 4-6 th??ng ????? c?? th??? b???t
                  ?????u c??ng vi???c ?????u ti??n v???i v??? tr?? Intern t???i c??ng ty IT.
                </Box>
                <Box className="about-receive__gridItem">
                  <Typography
                    variant="h6"
                    gutterBottom
                    component="h4"
                    className="about-receive__heading"
                  >
                    4. L??m ??i???u quan tr???ng
                  </Typography>{" "}
                  Chi?? ho??c v?? l??m nh???ng ??i???u quan tr???ng ?????? ?????t ???????c m???c ti??u ??i
                  l??m ???????c trong th???i gian ng???n nh???t.
                </Box>
              </Box>
            </Box>
          </Grid>
        </Container>
      </Box>

      <Container>
        <UserCards />
      </Container>

      <Copyright sx={{ pt: 4, pb: 4 }} />
    </Box>
  );
}

AboutUs.getLayout = function getLayout(page) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default AboutUs;
