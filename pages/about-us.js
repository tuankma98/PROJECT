import { Box, CardMedia, Container, Typography } from '@mui/material';
import Copyright from '../components/CopyRight';
import DefaultLayout from '../layouts/default';
import { Grid } from '@mui/material';
import UserCards from '../components/userCard/UserCard';

function AboutUs() {
  return (
    <Box
      component="main"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
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
                image="https://t3.ftcdn.net/jpg/02/94/37/08/360_F_294370899_CjLy3nMMSkm9FBsIdPvqlQgjiGrTT9kW.jpg"
                alt="Paella dish"
              />
            </Grid>

            <Grid lg={6} className="about-orientation__introtext">
              <Typography variant="h3" component="h2">
                BẠN CÓ BIẾT?
              </Typography>
              <Typography variant="body1" gutterBottom>
                Ngoài kia có rất nhiều bạn làm sai nghề, tư duy an phận và bị chôn chân với một công
                việc không đủ vui, không đủ sống, các bạn ấy gặp hết khủng hoảng tuổi này tới tuổi
                kia.
              </Typography>
              <Typography variant="body1" gutterBottom>
                Tuổi 22 đang ngỡ ngàng không biết mình nên làm nghề gì. Tuổi 28 thì bàng hoàng không
                biết lương như mình thì lập gia đình và nuôi dạy con cái làm sao. Tuổi 40 nuối tiếc
                thanh xuân của mình liệu có phải đã phí hoài không nhỉ....
              </Typography>
            </Grid>

            <Grid className="about-orientation__introtext-second">
              <Typography variant="body1" gutterBottom>
                Mọi chuyện sẽ rất khác nếu họ được định hướng công việc phù hợp, biết cách đặt cho
                mình một mục tiêu rõ ràng và có đầy đủ kĩ năng cần thiết để phát triển sự nghiệp.
              </Typography>
              <Typography variant="body1" gutterBottom>
                Chúng tôi tin rằng con người Việt Nam không hề thua kém gì so với con người ở bất cứ
                nơi đâu. Con rồng cháu tiên hoàn toàn có thể trở thành công dân toàn cầu để sánh vai
                cùng các cường quốc năm châu.
              </Typography>
              <Typography variant="body1" gutterBottom>
                Chúng tôi mong muốn trở thành một tổ chức góp phần tạo nên sự thay đổi đó, và việc
                tạo ra cộng đồng học lập trình mới chỉ là điểm bắt đầu. Chúng tôi đang nỗ lực tạo ra
                các khóa học có nội dung chất lượng vượt trội, giúp học viên sau khi hoàn thành khóa
                học có thể trở thành những lập trình viên luôn được nhiều công ty săn đón.
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
              <Typography variant="h3" gutterBottom component="div" className="about__heading">
                CHIẾN LƯỢC PHÁT TRIỂN
              </Typography>
              <Typography
                variant="h6"
                gutterBottom
                component="h4"
                className="about-receive__heading"
              >
                1. Coi trọng đào tạo và phát triển nhân tài
              </Typography>
              <Typography variant="body1" gutterBottom>
                Tôi tin rằng sản phẩm tuyệt vời chỉ có thể tạo ra bởi những con người tài năng. Công
                ty muốn tăng trưởng nhanh bền vững phải có những nhân sự xuất sắc có tâm, có tài. Vì
                vậy, chúng tôi không ngừng tìm kiếm và phát triển những cá nhân tài năng cùng xây
                dựng bộ máy. Nếu bạn muốn được làm cùng với những người giỏi giang khác? Bạn muốn
                được chủ động quyết định trong công việc của mình? Và bạn muốn được tương thưởng
                xứng đáng? Hãy về với chúng tôi 😍
              </Typography>
              <Box className="about-receive-block">
                <Box className="about-receive-block__text">
                  <Typography
                    variant="h6"
                    gutterBottom
                    component="h4"
                    className="about-receive__heading"
                  >
                    2. Sản phẩm làm ra là phải chất lượng, là phải bán được
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    chúng tôi làm ra những sản phẩm phục vụ thị trường lớn, chất lượng và hiệu quả
                    thực sự, đáp ứng nhu cầu cấp thiết của học viên. Mỗi khóa học, mỗi bài giảng của
                    chúng tôi không phải được làm ra bởi chỉ một người. Mà đó là tổng hoà chuyên môn
                    của người dạy, sales, marketing, lập trình viên, đạo diễn hình ảnh và âm thanh…
                    Khúc nào cũng phải cố benchmarking, tự tin đứng cạnh các sản phẩm của thế giới.
                    Tức là làm một cách thông minh và xâu chuỗi nhiều loại hiểu biết khác nhau.
                  </Typography>
                </Box>
                <CardMedia
                  component="img"
                  height="310"
                  width="100%"
                  image="https://vnce.vn/Uploads/images/chung-nhan-iso/chat_luong_san_pham_la_gi.jpg"
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
                    3. Tập trung vào khách hàng
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Khi học lập trình phần đông học viên dễ bị mất định hướng, dễ nản khi gặp khó
                    khăn mà không ai giúp đỡ, nhiều khi thấy làm giống hệt video rồi mà không
                    chạy... Tại chúng tôi, chúng tôi thấu hiểu những khó khăn của các bạn, chúng tôi
                    nỗ lực tạo ra giáo trình và hệ thống bài tập, hệ thống hỗ trợ các bạn tối đa
                    trong quá trình học tập.
                  </Typography>
                </Box>
                <CardMedia
                  component="img"
                  height="310"
                  width="100%"
                  image="https://subiz.com.vn/blog/wp-content/uploads/2019/07/1_9clyDN9TIVZY4_Q-zZtzvQ.jpeg"
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
                    4. Bán hàng và chăm sóc khách hàng bền vững
                  </Typography>
                  <Typography variant="body1" gutterBottom>
                    Việc bán hàng sẽ trở nên rất dễ dàng khi khách hàng sử dụng hiệu quả và truyền
                    tai nhau về sản phẩm. Thành công về mặt doanh số không quan trọng bằng việc
                    người học đánh giá cao sản phẩm sau đó tiếp tục sử dụng, thậm chí còn giới thiệu
                    cho người thân và bạn bè. chúng tôi là một trong những công ty giáo dục, có lẽ
                    là duy nhất đầu tư rất nhiều ngân sách vào việc chăm sóc khách hàng, thay vì bỏ
                    tiền đi đánh bóng tên tuổi. chúng tôi sẽ tìm mọi cách để dần đạt được con số 99%
                    khách hàng hài lòng. 1% còn lại là những con người của chúng tôi, chúng tôi
                    không cho phép bản thân mình cảm thấy hài lòng hoàn toàn về sản phẩm. Đó chính
                    là động lực để chúng tôi liên tục cải thiện, liên tục phát triển và tạo ra các
                    sản phẩm hỗ trợ học tập chất lượng cho cộng đồng.
                  </Typography>
                </Box>
                <CardMedia
                  component="img"
                  height="310"
                  width="100%"
                  image="https://fastwork.vn/wp-content/uploads/2020/07/235.jpg"
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
              <Typography variant="h3" gutterBottom component="div" className="about__heading">
                Bạn nhận được gì từ chúng tôi?
              </Typography>
              <Box className="about-receive__grid">
                <Box className="about-receive__gridItem">
                  <Typography
                    variant="h6"
                    gutterBottom
                    component="h4"
                    className="about-receive__heading"
                  >
                    1. Sự thành thạo
                  </Typography>{' '}
                  Các bài học đi đôi với thực hành, làm bài kiểm tra ngay trên trang web và bạn luôn
                  có sản phẩm thực tế sau mỗi khóa học.
                </Box>
                <Box className="about-receive__gridItem">
                  <Typography
                    variant="h6"
                    gutterBottom
                    component="h4"
                    className="about-receive__heading"
                  >
                    2. Tính tự học
                  </Typography>{' '}
                  Một con người chỉ thực sự trưởng thành trong sự nghiệp nếu họ biết cách tự thu nạp
                  kiến thức mới cho chính mình.
                </Box>
                <Box className="about-receive__gridItem">
                  <Typography
                    variant="h6"
                    gutterBottom
                    component="h4"
                    className="about-receive__heading"
                  >
                    3. Tiết kiệm thời gian
                  </Typography>{' '}
                  Thay vì chật vật vài năm thì chỉ cần 4-6 tháng để có thể bắt đầu công việc đầu
                  tiên với vị trí Intern tại công ty IT.
                </Box>
                <Box className="about-receive__gridItem">
                  <Typography
                    variant="h6"
                    gutterBottom
                    component="h4"
                    className="about-receive__heading"
                  >
                    4. Làm điều quan trọng
                  </Typography>{' '}
                  Chỉ học và làm những điều quan trọng để đạt được mục tiêu đi làm được trong thời
                  gian ngắn nhất.
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
  return <DefaultLayout title={'Thông tin'}>{page}</DefaultLayout>;
};

export default AboutUs;
