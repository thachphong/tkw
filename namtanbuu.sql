/*
Navicat MySQL Data Transfer

Source Server         : MySQL
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : namtanbuu

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2017-05-16 20:17:44
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for category
-- ----------------------------
DROP TABLE IF EXISTS `category`;
CREATE TABLE `category` (
  `ctg_id` int(11) NOT NULL AUTO_INCREMENT,
  `ctg_no` varchar(200) DEFAULT NULL,
  `ctg_name` varchar(200) NOT NULL,
  `parent_id` int(11) NOT NULL DEFAULT '0',
  `del_flg` int(11) DEFAULT NULL,
  `add_date` datetime DEFAULT NULL,
  `add_user` int(11) DEFAULT NULL,
  `upd_date` datetime DEFAULT NULL,
  `upd_user` int(11) DEFAULT NULL,
  `sort` int(11) DEFAULT NULL,
  `ctg_level` int(11) DEFAULT '0',
  `news_flg` int(11) DEFAULT '0',
  PRIMARY KEY (`ctg_id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of category
-- ----------------------------
INSERT INTO `category` VALUES ('37', 'nam-an', 'Nấm Ăn', '0', '0', '2017-05-09 20:17:58', '1', '2017-05-09 20:17:58', '1', '1', '1', '0');
INSERT INTO `category` VALUES ('38', 'nam-lam-thuoc', 'Nấm làm thuốc', '0', '0', '2017-05-09 20:18:16', '1', '2017-05-09 20:18:16', '1', '1', '1', '0');
INSERT INTO `category` VALUES ('39', 'ruou-nam', 'Rượu nấm', '0', '0', '2017-05-09 20:18:55', '1', '2017-05-09 20:19:08', '1', '3', '1', '0');
INSERT INTO `category` VALUES ('40', 'tin-suc-khoe', 'Tin sức khỏe', '0', '0', '2017-05-16 00:01:43', '1', '2017-05-16 00:01:43', '1', '1', '1', '1');

-- ----------------------------
-- Table structure for lang
-- ----------------------------
DROP TABLE IF EXISTS `lang`;
CREATE TABLE `lang` (
  `lang_id` int(11) NOT NULL AUTO_INCREMENT,
  `lang_name` varchar(100) NOT NULL,
  `del_flg` int(11) NOT NULL DEFAULT '0',
  `add_date` datetime DEFAULT NULL,
  `add_user` int(11) DEFAULT NULL,
  `upd_date` datetime DEFAULT NULL,
  `upd_user` int(11) DEFAULT NULL,
  PRIMARY KEY (`lang_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of lang
-- ----------------------------
INSERT INTO `lang` VALUES ('1', 'Việt Nam', '0', null, null, null, null);
INSERT INTO `lang` VALUES ('2', 'English', '0', null, null, null, null);

-- ----------------------------
-- Table structure for menu
-- ----------------------------
DROP TABLE IF EXISTS `menu`;
CREATE TABLE `menu` (
  `menu_id` int(11) NOT NULL AUTO_INCREMENT,
  `menu_name` varchar(200) NOT NULL,
  `menu_level` int(11) NOT NULL DEFAULT '0',
  `del_flg` int(11) NOT NULL DEFAULT '0',
  `parent_id` int(11) NOT NULL DEFAULT '0',
  `add_date` datetime DEFAULT NULL,
  `add_user` int(11) DEFAULT NULL,
  `upd_date` datetime DEFAULT NULL,
  `upd_user` int(11) DEFAULT NULL,
  `link` varchar(200) DEFAULT NULL,
  `page_flg` int(11) DEFAULT '0',
  `sort` int(11) DEFAULT NULL,
  PRIMARY KEY (`menu_id`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of menu
-- ----------------------------
INSERT INTO `menu` VALUES ('28', 'Trang chủ', '1', '0', '0', '2017-05-07 22:41:04', '1', '2017-05-07 22:41:04', '1', null, null, '1');
INSERT INTO `menu` VALUES ('29', 'Giới thiệu', '1', '0', '0', '2017-05-07 22:41:23', '1', '2017-05-07 22:41:23', '1', null, null, '2');
INSERT INTO `menu` VALUES ('30', 'Sản phẩm', '1', '0', '0', '2017-05-07 22:41:41', '1', '2017-05-07 22:41:41', '1', null, null, '3');
INSERT INTO `menu` VALUES ('31', 'Dịch vụ', '1', '0', '0', '2017-05-07 22:43:24', '1', '2017-05-07 22:43:24', '1', null, null, '4');
INSERT INTO `menu` VALUES ('33', 'Liên hệ', '1', '0', '0', '2017-05-07 22:44:28', '1', '2017-05-14 17:37:54', '1', 'lien-he', '1', '6');
INSERT INTO `menu` VALUES ('34', 'Tư vấn', '1', '0', '0', '2017-05-07 22:44:50', '1', '2017-05-07 22:44:50', '1', null, null, '7');
INSERT INTO `menu` VALUES ('35', 'Thông báo', '2', '0', '29', '2017-05-07 22:45:45', '1', '2017-05-07 22:45:45', '1', null, null, '1');
INSERT INTO `menu` VALUES ('36', 'Chúng tôi là ai', '2', '0', '29', '2017-05-07 22:46:18', '1', '2017-05-07 22:46:18', '1', null, null, '2');
INSERT INTO `menu` VALUES ('37', 'Hình ảnh hoạt động', '2', '0', '29', '2017-05-07 22:46:38', '1', '2017-05-14 17:41:54', '1', 'hinh-anh-hoat-dong', '1', '3');
INSERT INTO `menu` VALUES ('38', 'Đại lý', '2', '0', '31', '2017-05-08 22:20:53', '1', '2017-05-08 22:20:53', '1', null, null, '1');
INSERT INTO `menu` VALUES ('39', 'Đại lý bến tre', '3', '0', '38', '2017-05-08 22:21:29', '1', '2017-05-08 22:21:29', '1', null, null, '1');
INSERT INTO `menu` VALUES ('40', 'Đại lý cần thơ', '3', '0', '38', '2017-05-08 22:21:57', '1', '2017-05-08 22:21:57', '1', null, null, '2');
INSERT INTO `menu` VALUES ('41', 'Nấm ăn', '2', '0', '30', '2017-05-12 22:51:44', '1', '2017-05-12 22:51:44', '1', 'nam-an', '2', '1');
INSERT INTO `menu` VALUES ('42', 'Nấm làm thuốc', '2', '0', '30', '2017-05-12 22:52:26', '1', '2017-05-12 22:52:26', '1', 'nam-lam-thuoc', '2', '2');
INSERT INTO `menu` VALUES ('43', 'Rượu nấm', '2', '0', '30', '2017-05-12 22:53:01', '1', '2017-05-12 22:53:01', '1', 'ruou-nam', '2', '3');
INSERT INTO `menu` VALUES ('44', 'Tin tức', '1', '0', '0', '2017-05-16 00:00:27', '1', '2017-05-16 00:00:44', '1', null, null, '7');
INSERT INTO `menu` VALUES ('45', 'Tin sức khỏe', '2', '0', '44', '2017-05-16 00:01:20', '1', '2017-05-16 00:14:09', '1', 'tin-suc-khoe', '3', '1');

-- ----------------------------
-- Table structure for menu_lang
-- ----------------------------
DROP TABLE IF EXISTS `menu_lang`;
CREATE TABLE `menu_lang` (
  `menu_lang_id` int(11) NOT NULL AUTO_INCREMENT,
  `menu_id` int(11) NOT NULL,
  `lang_id` int(11) NOT NULL,
  `menu_lang_name` varchar(100) NOT NULL,
  `add_date` datetime DEFAULT NULL,
  `add_user` int(11) DEFAULT NULL,
  `upd_date` datetime DEFAULT NULL,
  `upd_user` int(11) DEFAULT NULL,
  `del_flg` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`menu_lang_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of menu_lang
-- ----------------------------
INSERT INTO `menu_lang` VALUES ('1', '1', '1', 'Trang chủ', null, null, null, null, '0');
INSERT INTO `menu_lang` VALUES ('2', '1', '2', 'Home', null, null, null, null, '0');
INSERT INTO `menu_lang` VALUES ('3', '2', '1', 'Quản trị', null, null, null, null, '0');
INSERT INTO `menu_lang` VALUES ('4', '2', '2', 'Admin', null, null, null, null, '0');
INSERT INTO `menu_lang` VALUES ('5', '3', '1', 'Quản lý sản phẩm', null, null, null, null, '0');
INSERT INTO `menu_lang` VALUES ('6', '3', '2', 'Products', null, null, null, null, '0');

-- ----------------------------
-- Table structure for message_lang
-- ----------------------------
DROP TABLE IF EXISTS `message_lang`;
CREATE TABLE `message_lang` (
  `msg_id` int(11) NOT NULL AUTO_INCREMENT,
  `msg_no` varchar(20) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `des` varchar(200) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `lang_key` int(1) NOT NULL COMMENT '1: VN, 2:EN',
  `screen` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`msg_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of message_lang
-- ----------------------------
INSERT INTO `message_lang` VALUES ('1', 'USE_user_name', 'Tên đăng nhập', '1', 'USER');
INSERT INTO `message_lang` VALUES ('2', 'USE_pass', 'Mật khẩu', '1', 'USER');
INSERT INTO `message_lang` VALUES ('3', 'USE_success', 'Đăng ký thành công !', '1', 'USER');
INSERT INTO `message_lang` VALUES ('4', 'LOG002', 'Tên đăng nhập', '1', 'LOGIN');
INSERT INTO `message_lang` VALUES ('5', 'LOG003', 'Mật khẩu', '1', 'LOGIN');
INSERT INTO `message_lang` VALUES ('6', 'LOG001', 'From đăng nhập', '1', 'LOGIN');
INSERT INTO `message_lang` VALUES ('7', 'LOG004', 'ss', '1', 'LOGIN');
INSERT INTO `message_lang` VALUES ('8', 'LOG005', 'Đăng ký', '1', 'LOGIN');
INSERT INTO `message_lang` VALUES ('9', 'LOG006', 'Đăng nhập', '1', 'LOGIN');

-- ----------------------------
-- Table structure for news
-- ----------------------------
DROP TABLE IF EXISTS `news`;
CREATE TABLE `news` (
  `news_id` int(11) NOT NULL AUTO_INCREMENT,
  `news_no` varchar(255) NOT NULL,
  `news_name` varchar(255) NOT NULL,
  `ctg_id` int(11) DEFAULT NULL,
  `des` varchar(1000) DEFAULT NULL,
  `content` text,
  `img_path` varchar(255) DEFAULT NULL,
  `add_date` datetime DEFAULT NULL,
  `add_user` int(11) DEFAULT NULL,
  `upd_date` datetime DEFAULT NULL,
  `upd_user` int(11) DEFAULT NULL,
  `del_flg` int(11) DEFAULT NULL,
  PRIMARY KEY (`news_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of news
-- ----------------------------
INSERT INTO `news` VALUES ('3', 'adfs', 'ádfs', '25', 'dafafdas', '<p>adfasfa</p>', 'dsafa', '2017-04-26 00:34:07', '1', '2017-04-26 00:37:58', '1', '0');
INSERT INTO `news` VALUES ('5', 'zxczxc', 'zxczxc', '25', 'asda', '<p>sada</p>', 'ádad', '2017-04-26 00:39:05', '1', '2017-04-26 00:39:05', '1', '0');
INSERT INTO `news` VALUES ('6', 'zxczxc-1', 'zxczxc', '24', 'asdf', '<p>asdfsf</p>', 'sdafs', '2017-04-26 00:39:47', '1', '2017-04-26 00:39:47', '1', '0');
INSERT INTO `news` VALUES ('7', 'thue-xe-16c-trong-noi-thanh-tphcm', 'THUÊ XE 16C TRONG NỘI THÀNH TPHCM', '32', 'Dòng xe Ford Transit có ưu điểm hơn Mers Sprinter ở chỗ ghế nội thất được thiết kế ngã ra sau nhiều hơn. Khách hàng ngồi trên xe cảm thấy thoái mải hơn.\r\nQuý khách có thể tham khảo bảng giá xe bên dưới:\r\n-Trong nội thành TPHCM: giới hạn 100km/10h giá 1tr6.', '<p dir=\"ltr\"><img src=\"http://localhost/shopping/data/product/201704/5904ba4912b12.jpg\" style=\"width: 407px; height: 305.25px;\" class=\"fr-fic fr-dib\">D&ograve;ng xe Ford Transit c&oacute; ưu điểm hơn Mers Sprinter ở chỗ ghế nội thất được thiết kế ng&atilde; ra sau nhiều hơn. Kh&aacute;ch h&agrave;ng ngồi tr&ecirc;n xe cảm thấy tho&aacute;i mải hơn.</p><p dir=\"ltr\">Qu&yacute; kh&aacute;ch c&oacute; thể tham khảo bảng gi&aacute; xe b&ecirc;n dưới:</p><p dir=\"ltr\">-Trong nội th&agrave;nh TPHCM: giới hạn 100km/10h gi&aacute; 1tr6.</p><p dir=\"ltr\">- HCM đi Địa đạo Củ Chi : 1tr6</p><p dir=\"ltr\">- HCM đi Cần Giờ:1tr8</p><p dir=\"ltr\">- HCM đi C&aacute;i B&egrave;:2tr</p><p dir=\"ltr\">- HCM đi Vũng T&agrave;u:2tr2</p><p dir=\"ltr\">&rArr; Gi&aacute; xe tr&ecirc;n chưa bao gồm thuế VAT ( nếu c&oacute;), v&agrave; ph&iacute; đậu xe.</p><p><br></p><h2 dir=\"ltr\">Một v&agrave;i lưu &yacute; khi đặt xe 16 chỗ đi du lịch</h2><p dir=\"ltr\">*Gi&aacute; xe 16C đi v&agrave;o ng&agrave;y cuối tuần thường cao hơn ng&agrave;y l&agrave;m việc trong tuần 200-300k nh&eacute;</p><p dir=\"ltr\">*Thuexegiare.net chỉ đ&oacute;n 1-2 điểm trong nội th&agrave;nh TPHCM ( sẽ phụ thu nếu đ&oacute;n tại B&igrave;nh Ch&aacute;nh, H&oacute;c M&ocirc;n, Nh&agrave; B&egrave;, Thủ Đức&hellip;)</p><p dir=\"ltr\">* Đặt cọc trước 30% bằng h&igrave;nh thức tiền mặt/ chuyển khoản v&agrave;o c&aacute;c ng&agrave;y cuối tuần.</p><p dir=\"ltr\">* Thanh to&aacute;n hết phần tiền c&ograve;n lại khi kết th&uacute;c lộ tr&igrave;nh.</p><p dir=\"ltr\">C&Ocirc;NG TY CỔ PHẦN THƯƠNG MẠI V&Agrave; Đ&Agrave;O TẠO TIN HỌC LONG TH&Agrave;NH</p><p dir=\"ltr\">Lầu 12, Khu B, Số 4 Nguyễn Đ&igrave;nh Chiểu, Q1, TP HCM</p><p dir=\"ltr\">Hotline: 0902.202.202 hoặc (08)2202.2202</p><p dir=\"ltr\">Website: <a href=\"thuexegiare.net\">thuexegiare.net</a></p>', 'data/product/201704/5904ba33370c9.jpg', '2017-04-26 00:40:07', '1', '2017-04-29 23:08:09', '1', '0');
INSERT INTO `news` VALUES ('8', 'tour-du-lich-tay-nguyen', 'TOUR DU LICH TÂY NGUYÊN', '33', 'Dịch vụ cho thuê xe du lịch - Gọi: (08)2202.2202 - 0902.202.202 : ✔ Nhiều dòng xe cao cấp & sang trọng ✔ Tài xế chuyên nghiệp và lịch sự ✔ Giá rẻ nhất.\r\nDịch vụ cho thuê xe du lịch sẽ đưa du khách tới những địa danh đẹp của Việt Nam.', '<p><strong>Dịch vụ cho thu&ecirc; xe du lịch - Gọi: (08)2202.2202 - 0902.202.202 : ✔ Nhiều d&ograve;ng xe cao cấp &amp; sang trọng ✔ T&agrave;i xế chuy&ecirc;n nghiệp v&agrave; lịch sự ✔ Gi&aacute; rẻ nhất.</strong></p><p><strong>Dịch vụ cho thu&ecirc; xe du lịch sẽ đưa du kh&aacute;ch tới những địa danh đẹp của Việt Nam.</strong></p><p>T&acirc;y Nguy&ecirc;n l&agrave; v&ugrave;ng đất nổi danh với những pho sử thi anh h&ugrave;ng. Hiện v&ugrave;ng đất n&agrave;y hấp dẫn kh&aacute;ch du lịch kh&ocirc;ng chỉ bằng &acirc;m thanh cồng chi&ecirc;ng, ch&eacute; rượu cần b&ecirc;n bếp lửa m&agrave; c&ograve;n bởi những n&eacute;t văn h&oacute;a đặc sắc trong đời sống, sinh hoạt.</p><p>T&acirc;y Nguy&ecirc;n l&agrave; v&ugrave;ng cao nguy&ecirc;n gồm năm tỉnh: Kon Tum, Gia Lai, Đăk Lăk, Đăk N&ocirc;ng v&agrave; L&acirc;m Đồng. Đến với T&acirc;y Nguy&ecirc;n, du kh&aacute;ch kh&ocirc;ng những được &quot;chi&ecirc;m ngưỡng&quot; vẻ đẹp kỳ vĩ của n&uacute;i, th&aacute;c nước, nh&agrave; mồ.. m&agrave; c&ograve;n được h&ograve;a m&igrave;nh v&agrave;o cuộc sống thường nhật giản dị của b&agrave; con nơi đ&acirc;y.</p><p><a href=\"Thuexegiare.net\">Thuexegiare.net</a> đ&atilde; từng đồng h&agrave;nh với nhiều du kh&aacute;ch y&ecirc;u th&iacute;ch v&ugrave;ng đất t&acirc;y nguy&ecirc;n n&agrave;y. Ch&uacute;ng t&ocirc;i sẽ giới thiệu c&ugrave;ng qu&yacute; kh&aacute;ch những tour du lịch th&uacute; vị nơi đ&acirc;y.</p><p><strong><span style=\"font-size: 14px;\">DU LỊCH BU&Ocirc;N MA THUỘT-HỒ LAK-BẢN Đ&Ocirc;N</span></strong></p><p>Thời gian: 3 Ng&agrave;y 2 đ&ecirc;m</p><p>Kh&aacute;c với S&agrave;i G&ograve;n phồn hoa, ồn &agrave;o, Bu&ocirc;n Ma Thuột những ng&agrave;y n&agrave;y vẫn c&ograve;n những cơn gi&oacute; se lạnh lướt qua, nh&egrave; nhẹ thấm v&agrave;o da thịt. Kh&ocirc;ng kh&iacute; trong l&agrave;nh v&agrave; những cơn gi&oacute; từ n&uacute;i rừng T&acirc;y Nguy&ecirc;n mang lại cho con người nơi đ&acirc;y sự b&igrave;nh y&ecirc;n v&agrave; dịu m&aacute;t. Ngồi giữa thi&ecirc;n nhi&ecirc;n trong c&aacute;i se lạnh của sớm mai, nh&acirc;m nhi một ly c&agrave; ph&ecirc; n&oacute;ng v&agrave;o buổi s&aacute;ng, cảm gi&aacute;c l&acirc;ng l&acirc;ng, b&ugrave;i ng&ugrave;i đến kh&oacute; tả.</p><p><img src=\"http://localhost/shopping/data/product/201704/59049ef7105d2.jpg\" style=\"width: 428px; height: 321px;\" class=\"fr-fic fr-dib\"></p><p><strong><span style=\"font-size: 14px;\">NG&Agrave;Y 1 : <a href=\"TP.HCM\">TP.HCM</a> &ndash; BU&Ocirc;N MA THUỘT ( ĂN S&Aacute;NG &ndash; TRƯA &ndash; CHIỀU )</span></strong></p><p>Buổi s&aacute;ng : từ Tp. HCM đi T&acirc;y Nguy&ecirc;n &ndash; d&ugrave;ng điểm t&acirc;m tại Sở Sao &ndash; đi theo quốc lộ 14 qua c&aacute;c địa danh như Đồng Xo&agrave;i, S&oacute;c Bombo, B&ugrave; Đăng, B&ugrave; Đốp &ndash; d&ugrave;ng cơm trưa tại Dakmil.T&agrave;i xế của <a href=\"thuexegiare.net\">thuexegiare.net</a> sẽ đ&oacute;n Qu&yacute; kh&aacute;ch tại điểm hẹn. Sau đ&oacute; bắt đầu h&agrave;nh tr&igrave;nh du lịch đến với T&acirc;y Nguy&ecirc;n rừng n&uacute;i. Tr&ecirc;n đường đi, đến Sở Sao qu&yacute; kh&aacute;ch sẽ d&ugrave;ng điểm t&acirc;m tại đ&acirc;y. Tiếp tục h&agrave;nh tr&igrave;nh, đi theo quốc lộ 14, Qu&yacute; kh&aacute;ch sẽ đi qua c&aacute;c địa danh như Đồng Xo&agrave;i, một địa danh gắn liền với C&aacute;ch Mạng trước đ&acirc;y v&agrave; với nhiều c&aacute;nh đồng cao su bạt ng&agrave;n. Qua Đồng Xo&agrave;i, đến B&ugrave; Đăng B&ugrave; Đốp, Qu&yacute; kh&aacute;ch sẽ c&oacute; dịp nghe th&ecirc;m về S&oacute;c Bombo của người S&rsquo;ti&ecirc;ng một nơi nổi tiếng trong thời kỳ chống giặc Mỹ, gắn liền với b&agrave;i h&aacute;t &ldquo;Tiếng Ch&agrave;y Tr&ecirc;n S&oacute;c Bombo&rdquo; rất quen thuộc của nhạc sỹ Xu&acirc;n Hồng, một ch&uacute;t gợi nhớ c&oacute; thể khiến Qu&yacute; kh&aacute;ch tưởng chừng như cảm nhận được tiếng ch&agrave;y gi&atilde; gạo của đồng b&agrave;o người S&rsquo;ti&ecirc;ng văng vẳng đ&acirc;u đ&oacute;. Dừng ch&acirc;n nghỉ ngơi v&agrave; d&ugrave;ng bữa trưa ở Dakmil, nơi l&atilde;ng mạn v&agrave; hấp dẫn đối với du kh&aacute;ch như muốn lạc v&agrave;o chốn hoang vu của rừng n&uacute;i, đắm m&igrave;nh trong văn h&oacute;a Cồng Chi&ecirc;ng v&agrave; đặc sản T&acirc;y Nguy&ecirc;n.</p><p><img src=\"http://localhost/shopping/data/product/201704/59049f05985eb.jpg\" style=\"width: 427px; height: 320.25px;\" class=\"fr-fic fr-dib\"></p><p>Buổi Chiều: tham quan th&aacute;c Draysap &ndash; d&ugrave;ng cơm chiều. Tối tự do, thưởng thức c&agrave; ph&ecirc; Ban M&ecirc; ( tự t&uacute;c)</p><p>H&agrave;nh tr&igrave;nh buổi chiều bắt đầu bằng chuyến tham quan Th&aacute;c Draysap, hay c&ograve;n gọi l&agrave; th&aacute;c kh&oacute;i sương theo tiếng &Ecirc; Đ&ecirc;. Qu&yacute; kh&aacute;ch tận mắt chi&ecirc;m ngưỡng một ngọn th&aacute;c cực kỳ quyến rũ với một thế giới kỳ ảo của bụi nước như những l&agrave;n sương, sẽ mang lại cho du kh&aacute;ch nhiều cảm gi&aacute;c phi&ecirc;u bồng đến chốn thần ti&ecirc;n. Sau khi tham quan th&aacute;c Draysap, qu&yacute; kh&aacute;ch d&ugrave;ng cơm chiều. Tối đến, Qu&yacute; kh&aacute;ch tự do vui chơi hoặc thử hương vị c&agrave; ph&ecirc; ở ngay xứ sở được mệnh danh l&agrave; thi&ecirc;n đường c&agrave; ph&ecirc; n&agrave;y, với nhiều loại c&agrave; ph&ecirc;, nhiều hương vị kh&aacute;c nhau hẳn sẽ cho Qu&yacute; kh&aacute;ch nhiều trải nghiệm mới lạ trong văn h&oacute;a c&agrave; ph&ecirc;. (Chi ph&iacute; tự t&uacute;c )</p>', 'data/product/201704/59049f14751d9.jpg', '2017-04-29 21:12:36', '1', '2017-04-29 21:12:36', '1', '0');
INSERT INTO `news` VALUES ('9', 'bai-thuoc-quy-tu-nam-linh-chi', 'Bài Thuốc Quý Từ Nấm Linh Chi', '40', 'Nấm Linh Chi và hồng táo là hai vị thuốc quý, thực phẩm bổ dưỡng cho việc điều trị ung thư và tăng cường sức khỏe cho con người.\r\nTiến Sĩ Nguyễn Văn Hiếu, Phó Trưởng Khoa – Khoa Khoa học Trường Đại học Nông Lâm, phụ trách Dự án Linh Chi Nông Lâm  (www.linhchinonglam.com) cho biết công dụng của Nấm Linh Chi trong việc hỗ trợ điều trị bệnh ung thư gan...', '<p><br>Nấm Linh Chi v&agrave; hồng t&aacute;o l&agrave; hai vị thuốc qu&yacute;, thực phẩm bổ dưỡng cho việc điều trị ung thư v&agrave; tăng cường sức khỏe cho con người.<br>Tiến Sĩ Nguyễn Văn Hiếu, Ph&oacute; Trưởng Khoa &ndash; Khoa Khoa học Trường Đại học N&ocirc;ng L&acirc;m, phụ tr&aacute;ch Dự &aacute;n Linh Chi N&ocirc;ng L&acirc;m &nbsp;(www.linhchinonglam.com) cho biết c&ocirc;ng dụng của Nấm Linh Chi trong việc hỗ trợ điều trị bệnh ung thư gan, Tiến Sĩ Hiếu Cho biết:<br><img src=\"http://localhost/namtanbuu_com/data/product/201705/16/5919e047c0eb5.jpg\" style=\"width: 414px; height: 310.5px;\" class=\"fr-fic fr-dib\">&quot;Cấu tr&uacute;c độc đ&aacute;o của Nấm Linh Chi ch&iacute;nh l&agrave; th&agrave;nh phần kho&aacute;ng tố vi lượng đủ loại (119 chất), trong đ&oacute; một số kho&aacute;ng tố như Germanium hữu cơ, vanadium, cr&ocirc;m&hellip; c&aacute;c hợp chất polysaccharides v&agrave; triterpenoids... đ&acirc;y l&agrave; nh&acirc;n tố quan trọng cho việc tăng cường sức đề kh&aacute;ng,.gi&uacute;p tăng cường hệ thống miễn dịch, n&acirc;ng đỡ thể trạng bồi bổ cơ thể, đặc biệt th&agrave;nh phần polysarccharides trong Nấm Linh Chi c&oacute; t&aacute;c dụng khống chế sự ph&aacute;t triển của c&aacute;c tế b&agrave;o bất thường (t&aacute;c nh&acirc;n g&acirc;y ung thư, ung bướu) n&ecirc;n Linh Chi c&ograve;n được sử dụng trong việc hỗ trợ điều trị c&aacute;c bệnh ung thư gan n&oacute;i ri&ecirc;ng cũng như c&aacute;c bệnh ung thứ kh&aacute;c v&agrave; đặc biệt Nấm Linh Chi rất tốt cho qu&aacute; tr&igrave;nhhỗ trợ điều trị sau h&oacute;a trị, xạ trị của bệnh nh&acirc;n ung thư.</p><p>&nbsp;</p>', '201705/16/5919e05b52baf.jpg', '2017-05-16 00:08:38', '1', '2017-05-16 00:08:38', '1', '0');
INSERT INTO `news` VALUES ('10', 'nam-lim-xanh-ho-tro-dieu-tri-benh-tieu-duong', 'NẤM LIM XANH HỖ TRỢ ĐIỀU TRỊ BỆNH TIỂU ĐƯỜNG', '40', 'Theo nghiên cứu thì bệnh tiểu đường là một loại bệnh do rối loạn chuyển hóa đường trong cơ thể con người từ đó lượng đường tích tụ trong máu, trong nước tiểu, ảnh hưởng nghiêm trọng đến sức khoẻ của chúng ta. Trong thời buổi hiện nay bệnh tiểu đường không còn đe doạ đến tính mạng ...', '<p>Theo nghi&ecirc;n cứu th&igrave; bệnh tiểu đường l&agrave; một loại bệnh do rối loạn chuyển h&oacute;a đường trong cơ thể con người từ đ&oacute; lượng đường t&iacute;ch tụ trong m&aacute;u, trong nước tiểu, ảnh hưởng nghi&ecirc;m trọng đến sức khoẻ của ch&uacute;ng ta. Trong thời buổi hiện nay bệnh tiểu đường kh&ocirc;ng c&ograve;n đe doạ đến t&iacute;nh mạng người bệnh nữa l&agrave; v&igrave; bệnh c&oacute; thể chữa trị trực tiếp v&agrave; ngăn ngừa nhờ c&aacute;c biện ph&aacute;p y học cổ truyền v&agrave; hiện đại. Nhưng &nbsp;theo thống k&ecirc; th&igrave; con số &nbsp;người bị mắc bệnh ng&agrave;y c&agrave;ng tăng l&ecirc;n bởi lẻ ch&uacute;ng ta thường kh&ocirc;ng ch&uacute; trọng tới sức khỏe của bản th&acirc;n, khiến căn bệnh &acirc;m thầm ph&aacute;t triển v&agrave; để lại những di chứng kh&oacute; lường trước được.</p><p><br></p><p>bệnh tiểu đường đ&atilde; c&oacute; nấm lim xanh n&ocirc;ng l&acirc;m TP HCM</p><p>bệnh tiểu đường v&agrave; c&aacute;c triệu chứng</p><p><br></p><p>C&aacute;ch nhận biết bệnh tiểu đường trong cơ thể</p><p><br></p><p>Tăng cường kh&aacute;m sức khoẻ định k&igrave; sẽ sớm ph&aacute;t hiện ra c&aacute;c dấu hiệu của bệnh tiểu đường. C&aacute;c triệu chứng phổ biến của bệnh như sau:</p><p><img src=\"http://localhost/namtanbuu_com/data/product/201705/16/5919e1bae9ee3.jpg\" style=\"width: 435px; height: 326.25px;\" class=\"fr-fic fr-dib\"></p><p>- Đi tiểu tiện li&ecirc;n tục</p><p>- Cảm thấy kh&aacute;t nước</p><p>- Trong khi ăn vẩn c&oacute; cảm gi&aacute;c đ&oacute;i</p><p>- Cơ thể suy nhược mệt mỏi</p><p>- Nh&igrave;n vật thể xung quanh mờ đi</p><p>- S&uacute;t c&acirc;n</p><p>- Nhức, ngứa đau ch&acirc;n tay</p><p><br></p><p>Khi ph&aacute;t hiện ra những triệu chứng bất thường tr&ecirc;n cơ thể của m&igrave;nh, ch&uacute;ng ta phải đến ngay với b&aacute;c sĩ để được tư vấn phương ph&aacute;p giải quyết hợp l&yacute;, triệt để, ngăn chặn sự ph&aacute;t triển của bệnh nhằm sớm chữa trị để bệnh kh&ocirc;ng b&ugrave;ng ph&aacute;t nặng hơn.</p><p><br></p><p>nấm lim xanh hỗ trợ bệnh tiểu đường</p><p>c&aacute;c biến chứng của bệnh tiểu đường</p><p><br></p><p>Bệnh tiểu đường c&oacute; những biến chứng sau:</p><p><br></p><p>-mắt kh&oacute; nh&igrave;n, nhạy cảm với &aacute;nh s&aacute;ng v&agrave; nếu nặng c&oacute; khả năng g&acirc;y ra bệnh m&ugrave;.</p><p>- B&agrave;n ch&acirc;n bị lỡ lo&eacute;t đau r&aacute;t &hellip;</p><p>- hư hỏng d&acirc;y thần kinh, c&aacute;c tế b&agrave;o th&acirc;n kinh bị ti&ecirc;u diệt</p><p>- ảnh hưởng trực tiếp đến thận, g&acirc;y ra suy thận</p><p>- Suy giảm hệ thống miễn dịch trong cơ thể ch&uacute;ng ta</p><p>- Đột quỵ.</p>', '201705/16/5919e1ca0a6b0.jpg', '2017-05-16 00:13:51', '1', '2017-05-16 00:13:51', '1', '0');

-- ----------------------------
-- Table structure for orders
-- ----------------------------
DROP TABLE IF EXISTS `orders`;
CREATE TABLE `orders` (
  `ord_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `ord_date` datetime NOT NULL,
  `total_amount` decimal(10,0) DEFAULT NULL,
  `full_name` varchar(255) NOT NULL,
  `email` varchar(100) DEFAULT NULL,
  `phone` varchar(50) NOT NULL,
  `address` varchar(300) NOT NULL,
  `note` text,
  PRIMARY KEY (`ord_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of orders
-- ----------------------------
INSERT INTO `orders` VALUES ('1', null, '2017-05-15 21:00:13', '135', 'Nguyễn văn A', 'sadfdsf', '0922332323', 'sfgfsdgsdg ssdfsdfs', 'sdafsafsaf sdfsfsa sadfasfa');
INSERT INTO `orders` VALUES ('2', null, '2017-05-15 21:00:35', '135', 'Nguyễn văn A', 'sadfdsf@', '0922332323', 'sfgfsdgsdg ssdfsdfs', 'sdafsafsaf sdfsfsa sadfasfa');
INSERT INTO `orders` VALUES ('3', null, '2017-05-15 21:01:20', '135', 'Nguyễn văn A', 'sadfdsf@', '0922332323', 'sfgfsdgsdg ssdfsdfs', 'sdafsafsaf sdfsfsa sadfasfa');
INSERT INTO `orders` VALUES ('4', null, '2017-05-15 21:02:03', '135', 'Nguyễn văn A', 'sadfdsf@', '0922332323', 'sfgfsdgsdg ssdfsdfs', 'sdafsafsaf sdfsfsa sadfasfa');
INSERT INTO `orders` VALUES ('5', null, '2017-05-15 21:45:01', '1500090', 'Nguyễn văn A', 'sgffsdgds', 'sdfgsdg', 'fsdgfdsg', 'fsdgsdfgsdgsd');
INSERT INTO `orders` VALUES ('6', null, '2017-05-15 21:59:06', '90', 'fsgdfsgd', 'fdgd', 'fsgsd', 'gfdgsd', 'sdfgsdgs');
INSERT INTO `orders` VALUES ('7', null, '2017-05-15 22:03:51', '1000000', 'zxcxz', 'zxcz', 'xzcz', 'xzcz', 'xzcz');
INSERT INTO `orders` VALUES ('8', null, '2017-05-15 22:10:32', '45', 'zzzzzzzzzzz', 'ssssssssss', 'wwww', 'assss', 'adfasa');
INSERT INTO `orders` VALUES ('9', null, '2017-05-15 22:15:41', '60', 'cxvzvxz', 'vzczvx', 'xcvzzvx', 'cvxczvx', 'vzczxvvxcz');
INSERT INTO `orders` VALUES ('10', null, '2017-05-15 22:22:25', '1500000', 'sdsf', 'sdsfsf', 'sdfsf', 'sdfsf', 'sdfsdf');
INSERT INTO `orders` VALUES ('11', null, '2017-05-15 23:16:00', '90', 'Nguyễn văn A', null, '0978453184', '212 nguyen cuu van', null);

-- ----------------------------
-- Table structure for orders_detail
-- ----------------------------
DROP TABLE IF EXISTS `orders_detail`;
CREATE TABLE `orders_detail` (
  `de_ord_id` int(11) NOT NULL AUTO_INCREMENT,
  `ord_id` int(11) DEFAULT NULL,
  `pro_id` int(11) NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `qty` int(11) NOT NULL,
  `total` decimal(10,0) DEFAULT NULL,
  PRIMARY KEY (`de_ord_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of orders_detail
-- ----------------------------
INSERT INTO `orders_detail` VALUES ('1', '3', '10', '45', '3', '135');
INSERT INTO `orders_detail` VALUES ('2', '4', '10', '45', '3', '135');
INSERT INTO `orders_detail` VALUES ('3', '5', '9', '500000', '3', '1500000');
INSERT INTO `orders_detail` VALUES ('4', '5', '10', '45', '2', '90');
INSERT INTO `orders_detail` VALUES ('5', '6', '10', '45', '2', '90');
INSERT INTO `orders_detail` VALUES ('6', '7', '9', '500000', '2', '1000000');
INSERT INTO `orders_detail` VALUES ('7', '8', '10', '45', '1', '45');
INSERT INTO `orders_detail` VALUES ('8', '9', '11', '60', '1', '60');
INSERT INTO `orders_detail` VALUES ('9', '10', '9', '500000', '3', '1500000');
INSERT INTO `orders_detail` VALUES ('10', '11', '10', '45', '2', '90');

-- ----------------------------
-- Table structure for page
-- ----------------------------
DROP TABLE IF EXISTS `page`;
CREATE TABLE `page` (
  `page_id` int(11) NOT NULL AUTO_INCREMENT,
  `page_no` varchar(255) NOT NULL,
  `page_name` varchar(255) NOT NULL,
  `content` text,
  `img_path` varchar(255) DEFAULT NULL,
  `add_date` datetime DEFAULT NULL,
  `add_user` int(11) DEFAULT NULL,
  `upd_date` datetime DEFAULT NULL,
  `upd_user` int(11) DEFAULT NULL,
  `disp_home` int(1) DEFAULT NULL,
  `del_flg` int(1) DEFAULT '0',
  PRIMARY KEY (`page_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of page
-- ----------------------------
INSERT INTO `page` VALUES ('1', 'gioi-thieu', 'Giới thiệu', '<p>Giới thiệu</p><p>Giới thiệu</p><p>Giới thiệu</p><p>Giới thiệu</p><p>Giới thiệu</p><p>Giới thiệu</p><p>Giới thiệu</p><p>Giới thiệu</p>', null, '2017-04-25 23:08:04', '1', '2017-05-04 20:09:38', '1', null, '0');
INSERT INTO `page` VALUES ('3', 'lien-he', 'Liên hệ', '<p>sdfsfsf</p><p><strong>dsfs</strong></p><p><strong><span style=\"color: rgb(226, 80, 65);\">.dssdfsfs</span></strong></p>', null, '2017-04-25 23:15:24', '1', '2017-05-14 17:42:57', '1', '0', '0');
INSERT INTO `page` VALUES ('4', 'cau-hoi-thuong-gap', 'Câu hỏi thường gặp', '<p><br></p><p><strong>Dịch vụ cho thu&ecirc; xe gi&aacute; rẻ - Gọi: (08)2202.2202 - 0902.202.202 : ✔ Nhiều d&ograve;ng xe cho thue cao cấp &amp; sang trọng ✔ T&agrave;i xế chuy&ecirc;n nghiệp v&agrave; lịch sự ✔ Gi&aacute; rẻ nhất Việt Nam.</strong></p><p><strong>1. Hỏi:&nbsp;</strong>T&ocirc;i muốn booking xe b&ecirc;n <a href=\"luhanhmientay.vn\">luhanhmientay.vn</a> th&igrave; phương thức đặt xe v&agrave; thanh to&aacute;n sẽ như thế n&agrave;o?</p><p>Trả lời: Trước hết bạn li&ecirc;n lạc với ch&uacute;ng t&ocirc;i qua số tổng đ&agrave;i của trung t&acirc;m giao dịch v&agrave; cho thu&ecirc; xe: 2202.2202 &ndash; 0902.202.202 hoặc gửi Email booking cho ch&uacute;ng t&ocirc;i, nh&acirc;n vi&ecirc;n kinh doanh sẽ lấy th&ocirc;ng tin chuyến đi &nbsp;b&aacute;o gi&aacute; cho bạn, nếu bạn đồng &yacute; về gi&aacute; cả, ch&uacute;ng t&ocirc;i sẽ xin th&ocirc;ng tin từ bạn để tiến h&agrave;nh l&agrave;m hợp đồng. Nếu bạn kh&ocirc;ng thể đến c&ocirc;ng ty để k&iacute; hợp đồng th&igrave; nh&acirc;n vi&ecirc;n kinh doanh sẽ đến tận địa chỉ nh&agrave; bạn, hoặc k&yacute; hợp đồng qua Email, Fax. H&igrave;nh thức thanh to&aacute;n sau khi k&iacute; hợp đồng &nbsp;bạn sẽ đặt cọc trước 30% tr&ecirc;n tổng gi&aacute; trị hợp đồng. Khi kết th&uacute;c chuyến vận chuyển bạn sẽ thanh to&aacute;n hết số c&ograve;n lại cho t&agrave;i xế.Ch&uacute;ng t&ocirc;i sẽ tạo mọi điều kiện tốt nhất cho bạn, để hai b&ecirc;n c&oacute; thể hợp t&aacute;c.</p><p><strong>2. Hỏi:</strong> H&ocirc;m trước t&ocirc;i c&oacute; nghe một người bạn đi chơi ở Vũng T&agrave;u về giới thiệu dịch vụ thu&ecirc; xe b&ecirc;n luhanhmientay.vn. Xe chất lượng cao, t&agrave;i xế phục vụ chu đ&aacute;o, nh&atilde; nhặn. Sắp tới t&ocirc;i cũng muốn đi chơi, dự định đặt xe b&ecirc;n luhanhmientay.vn. Gia đ&igrave;nh t&ocirc;i th&iacute;ch tự do, muốn t&agrave;i xế tự lo ăn nghỉ th&igrave; sẽ t&iacute;nh như thế n&agrave;o?</p><p>Trả lời: Thường b&ecirc;n <a href=\"luhanhmientay.vn\">luhanhmientay.vn</a> khi b&aacute;o gi&aacute; cho kh&aacute;ch sẽ kh&ocirc;ng t&iacute;nh ph&iacute; ăn nghỉ của t&agrave;i xế m&agrave; t&agrave;i xế sẽ ăn nghỉ chung với đo&agrave;n v&igrave; :</p><p>Thứ nhất khi t&agrave;i xế ở ri&ecirc;ng sẽ xa chỗ ở của đo&agrave;n như vậy l&uacute;c kh&aacute;ch muốn đi chơi th&igrave; li&ecirc;n hệ với t&agrave;i xế sẽ phải đợi l&acirc;u</p><p>Thứ 2 l&agrave; t&agrave;i xế b&ecirc;n <a href=\"luhanhmientay.vn\">luhanhmientay.vn</a> muốn h&ograve;a đồng với kh&aacute;ch h&agrave;ng, kh&aacute;ch ăn g&igrave; t&agrave;i xế ăn đ&oacute;, t&agrave;i rất dễ t&iacute;nh</p><p>Thứ 3 c&oacute; một số resort, kh&aacute;ch sạn c&oacute; ph&ograve;ng nội bộ, nếu qu&yacute; kh&aacute;ch y&ecirc;u cầu kh&aacute;ch sạn sẽ sắp xếp chỗ để t&agrave;i xế nghỉ ngơi.</p><p>Trường hợp nếu qu&yacute; kh&aacute;ch h&agrave;ng muốn t&agrave;i xế ăn nghỉ ri&ecirc;ng th&igrave; đối với xe từ 4 chỗ đến 29 chỗ th&igrave; sẽ t&iacute;nh 200.000 VNĐ/ ng&agrave;y đ&ecirc;m, xe 35-45 chỗ sẽ t&iacute;nh th&ecirc;m 500.000 VNĐ/ ng&agrave;y/ đ&ecirc;m.</p><p><strong>3. Hỏi:</strong> Hiện tại t&ocirc;i đang ở Đồng Nai, muốn đặt xe b&ecirc;n <a href=\"luhanhmientay.vn\">luhanhmientay.vn</a> cho một nh&oacute;m bạn đi chơi ở Th&aacute;c Giang Điền nhưng t&ocirc;i kh&ocirc;ng thể l&ecirc;n tới văn ph&ograve;ng Số 04 Nguyễn Đ&igrave;nh Chiểu, P. Đa Kao, Q.1 để l&agrave;m hợp đồng được. Vậy c&oacute; c&aacute;ch n&agrave;o để t&ocirc;i booking xe?</p><p>Trả lời: Để phục vụ qu&yacute; kh&aacute;ch h&agrave;ng trong cả nước <a href=\"luhanhmientay.vn\">luhanhmientay.vn</a> đ&atilde; tạo mọi đều kiện để qu&yacute; kh&aacute;ch h&agrave;ng c&oacute; thể hợp t&aacute;c với <a href=\"luhanhmientay.vn\">luhanhmientay.vn</a>&nbsp; bằng c&aacute;ch đến trực tiếp văn ph&ograve;ng Số 04 Nguyễn Đ&igrave;nh Chiểu, P. Đa Kao, Q.1. Hoặc <a href=\"luhanhmientay.vn\">luhanhmientay.vn</a> sẽ chuyển ph&aacute;t nhanh hợp đồng đến địa chỉ qu&yacute; kh&aacute;ch h&agrave;ng, đặt biệt nh&acirc;n vi&ecirc;n sẽ đến tận địa chỉ nh&agrave; qu&yacute; kh&aacute;ch h&agrave;ng để k&iacute; hợp đồng (trong phạm vi gần). Hoặc gởi hợp đồng qua Email, fax. Trường hợp k&yacute; hợp đồng qua mail hoặc fax qu&yacute; kh&aacute;ch h&agrave;ng sẽ chuyển khoản cọc 30% v&agrave;o t&agrave;i khoản thể hiện tr&ecirc;n hợp đồng .Số c&ograve;n lại thanh to&aacute;n trực tiếp cho t&agrave;i xế ngay sau khi kết th&uacute;c chuyến vận chuyển .</p><p><strong>4. Hỏi:</strong> L&agrave;m thế n&agrave;o để c&oacute; gi&aacute; ưu đ&atilde;i khi đặt xe b&ecirc;n luhanhmientay.vn?</p><p>Trả lời: Để nhận được gi&aacute; ưu đ&atilde;i khi đặt dịch vụ tại <a href=\"luhanhmientay.vn\">luhanhmientay.vn</a> th&igrave; qu&yacute; kh&aacute;ch h&agrave;ng phải đặt xe b&ecirc;n <a href=\"luhanhmientay.vn\">luhanhmientay.vn</a> một th&aacute;ng tr&ecirc;n 4 lần + &nbsp;giới thiệu kh&aacute;ch h&agrave;ng đến với luhanhmientay.vn. V&agrave; thanh to&aacute;n dịch vụ phải đ&uacute;ng thời hạn như trong hợp đồng đ&atilde; n&ecirc;u. Ch&uacute;ng t&ocirc;i theo d&otilde;i kh&aacute;ch h&agrave;ng tr&ecirc;n phầm mềm quản l&yacute; hiện đại nhất !</p><p><strong>5. Hỏi:</strong> Khi t&ocirc;i thu&ecirc; xe b&ecirc;n <a href=\"luhanhmientay.vn\">luhanhmientay.vn</a> c&oacute; được cung cấp nước suối v&agrave; khăn lạnh kh&ocirc;ng ?</p><p>Trả lời: <a href=\"luhanhmientay.vn\">luhanhmientay.vn</a> chỉ cho kh&aacute;ch thu&ecirc; xe, kh&ocirc;ng phải c&ocirc;ng ty du lịch b&aacute;n tour cho qu&yacute; kh&aacute;ch h&agrave;ng, v&igrave; thế sẽ kh&ocirc;ng cung cấp khăn lạnh v&agrave; nước suối cho qu&yacute; kh&aacute;ch h&agrave;ng. Nhưng nếu qu&yacute; kh&aacute;ch h&agrave;ng y&ecirc;u cầu ch&uacute;ng t&ocirc;i sẽ mua gi&uacute;p qu&yacute; kh&aacute;ch h&agrave;ng theo gi&aacute; đại l&yacute; c&oacute; h&oacute;a đơn b&aacute;n lẻ, sau đ&oacute; qu&yacute; kh&aacute;ch h&agrave;ng gởi tiền ph&iacute; trực tiếp cho t&agrave;i xế.</p><p><strong>6. Hỏi:</strong> Khi đặt xe b&ecirc;n <a href=\"luhanhmientay.vn\">luhanhmientay.vn</a> th&igrave; t&ocirc;i phải trả khoản chi ph&iacute; n&agrave;o ngo&agrave;i ph&iacute; thu&ecirc; xe m&agrave; <a href=\"luhanhmientay.vn\">luhanhmientay.vn</a> đ&atilde; b&aacute;o gi&aacute; cho ch&uacute;ng t&ocirc;i.</p><p>Trả lời: Trong trường hợp qu&yacute; kh&aacute;ch h&agrave;ng đặt xe của ch&uacute;ng t&ocirc;i, gi&aacute; ch&uacute;ng t&ocirc;i đưa ra cho qu&yacute; kh&aacute;ch h&agrave;ng l&uacute;c n&agrave;o cũng l&agrave; gi&aacute; net, chưa bao gồm VAT, bến b&atilde;i đậu xe. Nếu qu&yacute; kh&aacute;ch h&agrave;ng đi về trong ng&agrave;y th&igrave; đối với xe từ 4-29 chỗ <a href=\"luhanhmientay.vn\">luhanhmientay.vn</a> sẽ bao tiền ăn trưa của t&agrave;i xế, c&ograve;n xe 35-45 chỗ qu&yacute; kh&aacute;ch sẽ chịu tiền ăn trưa của l&aacute;i. Trong trường hợp qu&yacute; kh&aacute;ch h&agrave;ng ở lại đ&ecirc;m th&igrave; sẽ lo ăn nghỉ của l&aacute;i xe.</p><p><strong>7. Hỏi:</strong> Trong trường hợp t&ocirc;i đ&atilde; đặt xe của <a href=\"luhanhmientay.vn\">luhanhmientay.vn</a> nhưng v&igrave; l&yacute; do c&aacute; nh&acirc;n t&ocirc;i muốn hủy chuyến đi th&igrave; tiền đặt cọc c&oacute; được trả lại kh&ocirc;ng? v&agrave; khi t&ocirc;i đ&atilde; k&iacute; hợp đồng th&igrave; t&ocirc;i c&oacute; phải bồi thường hợp đồng hay l&agrave; kh&ocirc;ng?</p><p>Trả lời: Đối với những trường hợp hủy chuyến đi v&igrave; l&yacute; do ch&iacute;nh đ&aacute;ng, <a href=\"luhanhmientay.vn\">luhanhmientay.vn</a> sẽ kh&ocirc;ng bắt kh&aacute;ch h&agrave;ng phải bồi thường hợp đồng, nhưng số tiền đặt cọc sẽ kh&ocirc;ng được ho&agrave;n trả lại. Nhưng qu&yacute; kh&aacute;ch h&agrave;ng muốn hủy chuyến đi th&igrave; phải b&aacute;o trước cho nh&acirc;n vi&ecirc;n <a href=\"luhanhmientay.vn\">luhanhmientay.vn</a> trước thời gian đi l&agrave; 3 ng&agrave;y. Để <a href=\"luhanhmientay.vn\">luhanhmientay.vn</a> sắp xếp xe cho kh&aacute;ch h&agrave;ng kh&aacute;c đi.</p><p><br></p><p><br></p><p>8. Hỏi: T&ocirc;i thu&ecirc; xe b&ecirc;n <a href=\"luhanhmientay.vn\">luhanhmientay.vn</a> nhưng kh&ocirc;ng biết xe c&oacute; đầy đủ tiện nghi kh&ocirc;ng? C&oacute; bảo hiểm kh&ocirc;ng?</p><p>Trả lời: <a href=\"luhanhmientay.vn\">luhanhmientay.vn</a> sẽ cung cấp cho bạn những loại xe đời mới nhất v&agrave; sẽ c&oacute; bảo hiểm cho tất cả c&aacute;c loại xe, do đ&oacute; bạn h&atilde;y y&ecirc;n t&acirc;m về sự tiện nghi với độ an to&agrave;n khi thu&ecirc; xe ở <a href=\"luhanhmientay.vn\">luhanhmientay.vn</a> sẽ lu&ocirc;n được giữ ở mức cao nhất.</p><p><br></p><p><br></p><p>9. Hỏi: T&ocirc;i th&iacute;ch xe Civic. Sắp tới t&ocirc;i muốn thu&ecirc; đi c&ocirc;ng t&aacute;c ở Miền T&acirc;y. T&ocirc;i c&oacute; được chỉ định loại xe t&ocirc;i th&iacute;ch kh&ocirc;ng?</p><p>Trả lời: Th&ocirc;ng điệp ch&iacute;nh của <a href=\"luhanhmientay.vn\">luhanhmientay.vn</a> l&agrave; &nbsp;cố gắng hết sức để đ&aacute;p ứng nhu cầu kh&aacute;ch h&agrave;ng. V&igrave; thế bạn c&oacute; thể chọn loại xe bạn th&iacute;ch.</p><p><br></p><p><br></p><p>10. Hỏi: Trong trường hợp t&ocirc;i đi xe b&ecirc;n <a href=\"luhanhmientay.vn\">luhanhmientay.vn</a> nhưng t&ocirc;i sơ &yacute; bỏ qu&ecirc;n lại một số đồ d&ugrave;ng tr&ecirc;n xe. T&ocirc;i sẽ l&agrave;m g&igrave; để lấy lại đồ của m&igrave;nh để qu&ecirc;n.</p><p>Trả lời: Đối với trường hợp n&agrave;y th&igrave; xảy ra rất nhiều ở trung t&acirc;m <a href=\"Thuexegaire.net\">Thuexegaire.net</a> nhưng kh&aacute;ch h&agrave;ng sẽ nhanh ch&oacute;ng nhận lại được đồ của m&igrave;nh khi li&ecirc;n hệ tới tổng đ&agrave;i của ch&uacute;ng t&ocirc;i: 08.2202.2202 hoặc gọi tới số 0902.202.202. Ch&uacute;ng t&ocirc;i sẽ nhanh ch&oacute;ng kiểm tra lại đồ của bạn c&oacute; bị bỏ lại tr&ecirc;n xe kh&ocirc;ng v&agrave; sẽ nhanh ch&oacute;ng gởi lại bạn trong thời gian sớm nhất.</p><p><br></p><p><br></p><p>11. Hỏi: T&ocirc;i muốn thu&ecirc; xe nhưng kh&ocirc;ng biết chất lượng xe v&agrave; sự phục vụ của t&agrave;i xế <a href=\"luhanhmientay.vn\">luhanhmientay.vn</a> như thế n&agrave;o?</p><p>Trả lời: Để phục vụ kh&aacute;ch h&agrave;ng tốt hơn, <a href=\"luhanhmientay.vn\">luhanhmientay.vn</a> tuyển chọn những t&agrave;i xế từ 25 đến 35 tuổi v&agrave; c&oacute; nhiều kinh nghiệm trong ng&agrave;nh, tiếng Anh giao cơ bản v&agrave; xe <a href=\"luhanhmientay.vn\">luhanhmientay.vn</a> l&agrave; xe kinh doanh n&ecirc;n được bảo tr&igrave;, bảo dưỡng thường xuy&ecirc;n v&agrave; xe của <a href=\"luhanhmientay.vn\">luhanhmientay.vn</a> 90%- 100% l&agrave; xe đời mới c&oacute; m&aacute;y lạnh, đầu đĩa, micro, tivi đầy đủ n&ecirc;n bạn y&ecirc;n t&acirc;m khi sử dụng dịch vụ tại <a href=\"luhanhmientay.vn\">luhanhmientay.vn</a> nh&eacute;.</p><p><br></p><p><br></p><p>12. Hỏi: Trong trường hợp t&ocirc;i đ&atilde; k&yacute; hợp đồng xong nhưng sau đ&oacute; t&ocirc;i sử dụng m&agrave; thấy xe v&agrave; sự phục vụ của t&agrave;i xế kh&ocirc;ng tốt th&igrave; sao?</p><p>Trả lời: Nhằm tạo dựng niềm tin cho kh&aacute;ch h&agrave;ng mới sử dụng dịch vụ tại luhanhmientay.vn, khi bạn thấy gi&aacute; hợp l&yacute; th&igrave; sẽ k&yacute; hợp đồng trước v&agrave; thuexegiare,net để bạn được test xe, dịch vụ t&agrave;i xế trong v&ograve;ng 10 ng&agrave;y , sau 10 ng&agrave;y nếu kh&aacute;ch h&agrave;ng h&agrave;i l&ograve;ng về xe, về chất lượng phục vụ hợp đồng tự c&oacute; hiệu lực 12 th&aacute;ng v&agrave; kh&aacute;ch h&agrave;ng mới bắt đầu tiến h&agrave;nh chuyển tiền cọc cho luhanhmientay.vn.</p><p><br></p><p><br></p><p>13. Hỏi: Nếu t&ocirc;i thu&ecirc; xe từ thứ hai đến thứ s&aacute;u, vậy thứ bảy v&agrave; chủ nhật th&igrave; t&iacute;nh như thế n&agrave;o?</p><p>Trả lời: Nếu bạn thu&ecirc; xe từ thứ hai đến thứ 6 , th&igrave; thứ bảy v&agrave; chủ nhật được t&iacute;nh như sau:</p><p>- Thứ 7 &amp; chủ nhật &times; 150%/ 1 ng&agrave;y</p><p>- Lễ tết &times; 200%</p><p><br></p><p><br></p><p>14.Hỏi: &nbsp;Nếu trong 26 ng&agrave;y t&ocirc;i kh&ocirc;ng đi hết 2600km th&igrave; t&ocirc;i c&oacute; được nhận lại tiền kh&ocirc;ng?</p><p>Trả lời: Hợp đồng sẽ được t&iacute;nh từng th&aacute;ng , nếu trong th&aacute;ng , qu&yacute; c&ocirc;ng ty kh&ocirc;ng sử dụng hết 2600Km th&igrave; số Km đ&oacute; sẽ được bỏ v&agrave; kh&ocirc;ng ho&agrave;n trả lại hay cộng dồn v&agrave;o th&aacute;ng sau.</p><p><br></p><p><br></p><p>15. Hỏi: Nếu trong 1 th&aacute;ng t&ocirc;i sử dụng hơn 2600km v&agrave; hơn 10 tiếng th&igrave; t&ocirc;i sẽ phải thanh to&aacute;n như thế n&agrave;o?</p><p>Trả lời: Trong trường hợp trong 1 th&aacute;ng bạn sử dụng hơn 2600km v&agrave; hơn 10 tiếng th&igrave; <a href=\"luhanhmientay.vn\">luhanhmientay.vn</a> sẽ t&iacute;nh số tiền phụ trội ngo&agrave;i giờ v&agrave; phụ trội ngo&agrave;i km t&ugrave;y theo từng loại xe m&agrave; bạn đang k&yacute; hợp đồng tại luhanhmientay.vn.</p><p><br></p><p><br></p><p>16. Hỏi: T&ocirc;i muốn thu&ecirc; xe cho Sếp nhưng Sếp t&ocirc;i muốn tự l&aacute;i xe đi l&agrave;m việc, vậy <a href=\"luhanhmientay.vn\">luhanhmientay.vn</a> c&oacute; thể cung cấp cho t&ocirc;i kh&ocirc;ng?</p><p>Trả lời: Nhằm đ&aacute;p ứng nhu cầu kh&aacute;ch h&agrave;ng tốt nhất <a href=\"luhanhmientay.vn\">luhanhmientay.vn</a> cung cấp cho kh&aacute;ch h&agrave;ng xe c&oacute; t&agrave;i v&agrave; xe tự l&aacute;i. V&igrave; vậy, nếu bạn c&oacute; nhu cầu thu&ecirc; xe th&igrave; vui l&ograve;ng li&ecirc;n hệ 08 2202 2202 hoặc 0902 202 202</p><p><br></p><p><br></p><p>17. Hỏi: Trong trường hợp t&ocirc;i thu&ecirc; xe 26 ng&agrave;y / 2600km, vậy 1 ng&agrave;y t&ocirc;i kh&ocirc;ng đi hết 100 km th&igrave; sao?</p><p>Trả lời: V&igrave; tạo điều kiện cho kh&aacute;ch h&agrave;ng trong qu&aacute; tr&igrave;nh sử dụng xe n&ecirc;n số 2600km <a href=\"luhanhmientay.vn\">luhanhmientay.vn</a> sẽ cộng dồn v&agrave;o cuối th&aacute;ng.</p><p><br></p><p><br></p><p>18. Hỏi: T&ocirc;i muốn thu&ecirc; xe đưa đ&oacute;n nh&acirc;n vi&ecirc;n đi l&agrave;m nhưng tỉnh thoảng t&ocirc;i muốn d&ugrave;ng xe đi tỉnh c&oacute; được kh&ocirc;ng?</p><p>Trả lời: <a href=\"luhanhmientay.vn\">luhanhmientay.vn</a> ho&agrave;n to&agrave;n đ&aacute;p ứng được y&ecirc;u cầu của c&ocirc;ng ty.</p><p><br></p><p><br></p><p>19. Hỏi: Nếu t&ocirc;i k&yacute; hợp đồng với <a href=\"luhanhmientay.vn\">luhanhmientay.vn</a> được 1 năm với gi&aacute; thỏa thuận rồi th&igrave; t&ocirc;i muốn gia hạn hợp đồng th&igrave; gi&aacute; vẫn được giữ nguy&ecirc;n hay c&oacute; tăng giảm g&igrave; kh&ocirc;ng?</p><p>Trả lời: Trong trường hợp kh&aacute;ch h&agrave;ng muốn gia hạn hợp đồng , <a href=\"luhanhmientay.vn\">luhanhmientay.vn</a> sẽ cố gắng hết sức để giữ gi&aacute; cho kh&aacute;ch h&agrave;ng , trong trường hợp tăng gi&aacute; sẽ tăng kh&ocirc;ng qu&aacute; 10% v&agrave; sẽ phải b&aacute;o trước trong 30 ng&agrave;y.</p><p><br></p><p><br></p><p>20. Hỏi: Theo t&ocirc;i được biết theo quy định của <a href=\"luhanhmientay.vn\">luhanhmientay.vn</a> th&igrave; khi kỳ hợp đồng t&ocirc;i phải đặt cọc 1 th&aacute;ng nhưng t&ocirc;i kh&ocirc;ng đặt cọc c&oacute; được kh&ocirc;ng?</p><p>Trả lời: Theo quy định của <a href=\"luhanhmientay.vn\">luhanhmientay.vn</a> khi k&yacute; hợp đồng phải đặt cọc 01 th&aacute;ng nhằm đảm bảo sự thiện ch&iacute;, nghi&ecirc;m t&uacute;c của 2 b&ecirc;n trong qu&aacute; tr&igrave;nh hợp t&aacute;c.</p><p><br></p><p><br></p><p>21. Hỏi: Tại sao xe v&agrave; t&agrave;i của <a href=\"luhanhmientay.vn\">luhanhmientay.vn</a> m&agrave; ch&uacute;ng t&ocirc;i phải đặt cọc.</p><p>Trả lời:</p><p>- Bất kỳ c&ocirc;ng ty n&agrave;o về lĩnh vực thu&ecirc; xe đều quy định về khoản đặt cọc như một h&igrave;nh thức chắc chắn nhằm đảm bảo sự an to&agrave;n về việc thanh to&aacute;n cũng như giảm thiểu tốt nhất sự rủi ro c&oacute; thể xảy ra trong qu&aacute; tr&igrave;nh thực hiện hợp đồng.</p><p>- Trong trường hợp qu&yacute; c&ocirc;ng ty kh&ocirc;ng y&ecirc;n t&acirc;m về việc khi đặt cọc rồi <a href=\"luhanhmientay.vn\">luhanhmientay.vn</a> c&oacute; phục vụ hay kh&ocirc;ng, <a href=\"luhanhmientay.vn\">luhanhmientay.vn</a> sẽ tạo điều kiện cho qu&yacute; c&ocirc;ng ty chạy xe trước trong v&ograve;ng 07 -10 rồi chuyển khoản tiền đặt cọc để tạo l&ograve;ng tin , mối quan hệ cho nhau . L&uacute;c đ&oacute; qu&yacute; c&ocirc;ng ty cũng đ&atilde; hiểu v&agrave; biết c&aacute;c l&agrave;m việc của thuexegiare cũng như dịch vụ về xe v&agrave; t&agrave;i xế.</p><p>- <a href=\"luhanhmientay.vn\">luhanhmientay.vn</a> cũng đ&atilde; từng tạo điều kiện thuận lợi tốt nhất cho kh&aacute;ch h&agrave;ng về h&igrave;nh thức thanh to&aacute;n kh&ocirc;ng đặt cọc, tuy nhi&ecirc;n c&ocirc;ng ty ch&uacute;ng t&ocirc;i cũng từng gặp rủi ro khi đến kỳ thanh to&aacute;n m&agrave; đơn vị thu&ecirc; xe đ&atilde; kh&ocirc;ng thực hiện đ&uacute;ng hợp đồng khiến cho ch&uacute;ng t&ocirc;i rất kh&oacute; khăn trong việc thu hồi c&ocirc;ng nợ.</p>', null, '2017-04-29 16:56:07', '1', '2017-04-29 20:09:13', '1', null, '0');
INSERT INTO `page` VALUES ('5', 'ly-do-ban-chon-chung-toi', 'Lý do bạn chọn chúng tôi', '<p>L&yacute; do bạn chọn ch&uacute;ng t&ocirc;i</p><p>L&yacute; do bạn chọn ch&uacute;ng t&ocirc;i</p><p>L&yacute; do bạn chọn ch&uacute;ng t&ocirc;i</p><p>L&yacute; do bạn chọn ch&uacute;ng t&ocirc;i</p>', null, '2017-05-04 20:05:54', '1', '2017-05-04 20:05:54', '1', null, '0');
INSERT INTO `page` VALUES ('6', 'chinh-sach-bao-mat', 'Chính sách bảo mật', '<p>Ch&iacute;nh s&aacute;ch bảo mật</p><p>Ch&iacute;nh s&aacute;ch bảo mật</p><p>Ch&iacute;nh s&aacute;ch bảo mật</p><p>Ch&iacute;nh s&aacute;ch bảo mật</p>', null, '2017-05-04 20:06:33', '1', '2017-05-04 20:06:33', '1', null, '0');
INSERT INTO `page` VALUES ('7', 'hinh-thuc-thanh-toan', 'Hình thức thanh toán', '<p>H&igrave;nh thức thanh to&aacute;n</p><p>H&igrave;nh thức thanh to&aacute;n</p><p>H&igrave;nh thức thanh to&aacute;n</p><p>H&igrave;nh thức thanh to&aacute;n</p>', null, '2017-05-04 20:06:53', '1', '2017-05-04 20:06:53', '1', null, '0');
INSERT INTO `page` VALUES ('8', 'cham-soc-khach-hang', 'Chăm sóc khách hàng', '<p>Chăm s&oacute;c kh&aacute;ch h&agrave;ng</p><p>Chăm s&oacute;c kh&aacute;ch h&agrave;ng</p><p>Chăm s&oacute;c kh&aacute;ch h&agrave;ng</p><p>Chăm s&oacute;c kh&aacute;ch h&agrave;ng</p>', null, '2017-05-04 20:07:20', '1', '2017-05-04 20:07:20', '1', null, '0');
INSERT INTO `page` VALUES ('9', 'hinh-anh-hoat-dong', 'Hình ảnh hoạt động', '<p>1 v&agrave;i h&igrave;nh ảnh hoạt động</p><p><img src=\"http://localhost/namtanbuu_com/data/product/201705/12/5915c29745524.jpg\" style=\"width: 546px; height: 365.82px;\" class=\"fr-fic fr-dib\"></p><p><img src=\"http://localhost/namtanbuu_com/data/product/201705/12/5915c2a5bb487.JPG\" style=\"width: 545px; height: 461.433px;\" class=\"fr-fic fr-dib\"></p><p><br></p><p><strong>sdfasfsafsadfsa</strong></p><p>sadfsafsafsafsaf</p>', '201705/12/5915c2889896b.JPG', '2017-05-04 20:07:39', '1', '2017-05-14 20:30:18', '1', '1', '0');
INSERT INTO `page` VALUES ('10', 'giay-chung-nhan,-cong-bo-sp', 'Giấy chứng nhận, công bố sp', '<p><img src=\"http://localhost/namtanbuu_com/data/product/201705/12/5915c1b60adbd.PNG\" style=\"width: 519px; height: 717.891px;\" class=\"fr-fic fr-dib\"></p><p><br><img src=\"http://localhost/namtanbuu_com/data/product/201705/12/5915c1d13aa38.PNG\" style=\"width: 505px; height: 722.15px;\" class=\"fr-fic fr-dib\"></p>', '201705/12/5915c1a91d2ab.PNG', '2017-05-04 20:10:13', '1', '2017-05-12 21:09:43', '1', '1', '0');
INSERT INTO `page` VALUES ('11', 'trai-nuoi-trong-nam', 'Trại nuôi trồng nấm', '<p><img src=\"http://localhost/namtanbuu_com/data/product/201705/12/5915bf7305be0.jpg\" style=\"width: 422px; height: 316.5px;\" class=\"fr-fic fr-dib\"></p><p>dsfsfsfsfs</p><p>dfsafsaf</p><p><img src=\"http://localhost/namtanbuu_com/data/product/201705/12/5915bf822af50.jpg\" style=\"width: 405px; height: 303.75px;\" class=\"fr-fic fr-dib\"></p><p>sdfsafsa</p><p>sdafsafas</p><p>sadfasfsad</p><p>sdafdasf</p>', '201705/12/5915bf5f85590.jpg', '2017-05-04 20:11:10', '1', '2017-05-12 20:58:37', '1', '1', '0');

-- ----------------------------
-- Table structure for product
-- ----------------------------
DROP TABLE IF EXISTS `product`;
CREATE TABLE `product` (
  `pro_id` int(11) NOT NULL AUTO_INCREMENT,
  `pro_no` varchar(255) NOT NULL,
  `pro_name` varchar(255) NOT NULL,
  `ctg_id` int(11) NOT NULL,
  `disp_home` varchar(100) DEFAULT NULL,
  `status` int(1) DEFAULT NULL,
  `good_sell` int(1) DEFAULT NULL,
  `price_old` int(11) DEFAULT NULL,
  `price_new` int(11) DEFAULT NULL,
  `img_path` varchar(255) DEFAULT NULL,
  `content` text,
  `add_date` datetime DEFAULT NULL,
  `add_user` int(255) DEFAULT NULL,
  `upd_date` datetime DEFAULT NULL,
  `upd_user` int(255) DEFAULT NULL,
  `del_flg` int(11) DEFAULT NULL,
  PRIMARY KEY (`pro_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of product
-- ----------------------------
INSERT INTO `product` VALUES ('9', 'nam-linh-chi-do', 'Nấm linh chi đỏ', '38', '1', '0', '1', '600', '500000', null, '<p>Quy cách : 500G</p><p>Đặc sản Việt cung cấp Nấm Linh Chi đỏ Đà Lạt được trồng tại Đà Lạt theo quy trình khép kín, ứng dụng công nghệ sinh học nên rất an toàn, tự nhiên, giá trị dược liệu cao.<br>Quy cách: 250g/gói<br>Nhà sản xuất: Tây Nguyên</p>', '2017-05-11 22:38:39', '1', '2017-05-14 20:36:58', '1', '0');
INSERT INTO `product` VALUES ('10', 'nam-bao-ngu-trang', 'Nấm bào ngư trắng', '37', '1', '0', '1', null, '45', null, '<p>Quy cách : 1kg</p><p><span data-mce-style=\"font-size: 11pt;\"><span data-mce-style=\"box-sizing: border-box; font-family: Roboto, sans-serif !important; margin: 0px; padding: 0px; font-weight: bold; max-width: 100%;\">1. MÔ TẢ:&nbsp;</span><span data-mce-style=\"box-sizing: border-box; font-family: arial, helvetica, sans-serif; margin: 0px; padding: 0px; max-width: 100%; color: #444444; line-height: 22.4px; text-align: justify;\">Nấm sò trắng hay còn gọi là bào ngư trắng có vị ngọt thơm, dai, có giá trị dinh dưỡng cao, cung cấp các chất cần thiết cho cơ thể. Nấm bào ngư chứa nhiều protein, gluxit, vitamin và các acid amin có nguồn gốc từ thực vật, dễ hấp thụ bởi cơ thể con người. Hàm lượng protein có trong nấm bào ngư từ 33-34% có thể thay thế lượng đạm từ các loại thịt cá….</span><span data-mce-style=\"box-sizing: border-box; font-family: Roboto, sans-serif !important; margin: 0px; padding: 0px; font-weight: bold; max-width: 100%;\"><br data-mce-style=\"box-sizing: border-box; margin: 0px; padding: 0px; max-width: 100%;\"></span></span></p><p><span data-mce-style=\"font-size: 11pt;\">Một số cách chế biến nấm bào ngư đơn giản nhưng rất tốt cho sức khỏe: Cháo nấm bào ngư , canh nấm, &nbsp;nấm luộc, nấm xào…. &nbsp;Hai món sau đây giúp cải thiện bữa ăn hằng ngày của bạn rất tốt.</span></p><p><br></p>', '2017-05-11 22:50:16', '1', '2017-05-14 12:33:48', '1', '0');
INSERT INTO `product` VALUES ('11', 'nam-bao-ngu-xam', 'Nấm bào ngư xám ', '37', '0', '0', '1', null, '60', null, '<p>Quy cách : 1KG</p><p>Dùng nấu ăn</p>', '2017-05-11 22:53:10', '1', '2017-05-14 12:34:01', '1', '0');

-- ----------------------------
-- Table structure for product_img
-- ----------------------------
DROP TABLE IF EXISTS `product_img`;
CREATE TABLE `product_img` (
  `pro_img_id` int(11) NOT NULL AUTO_INCREMENT,
  `pro_id` int(11) NOT NULL,
  `img_path` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `img_thumb` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `avata_flg` int(1) DEFAULT '0',
  PRIMARY KEY (`pro_img_id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- ----------------------------
-- Records of product_img
-- ----------------------------
INSERT INTO `product_img` VALUES ('15', '9', '201705/11/5914853bce31f.jpg', '201705/11/5914853bce31f_thumb.jpg', '1');
INSERT INTO `product_img` VALUES ('16', '9', '201705/11/5914853beedcf.jpg', '201705/11/5914853beedcf_thumb.jpg', '0');
INSERT INTO `product_img` VALUES ('17', '9', '201705/11/5914853c251e2.jpg', '201705/11/5914853c251e2_thumb.jpg', '0');
INSERT INTO `product_img` VALUES ('18', '10', '201705/11/591487c826725.jpg', '201705/11/591487c826725_thumb.jpg', '1');
INSERT INTO `product_img` VALUES ('19', '10', '201705/11/591487d3f1c1c.JPG', '201705/11/591487d3f1c1c_thumb.JPG', '0');
INSERT INTO `product_img` VALUES ('20', '10', '201705/11/591487f8afe9b.jpg', '201705/11/591487f8afe9b_thumb.jpg', '0');
INSERT INTO `product_img` VALUES ('21', '11', '201705/11/591488b0962ac.jpg', '201705/11/591488b0962ac_thumb.jpg', '1');
INSERT INTO `product_img` VALUES ('22', '11', '201705/11/591488b13bae8.jpg', '201705/11/591488b13bae8_thumb.jpg', '0');
INSERT INTO `product_img` VALUES ('23', '11', '201705/11/591488b1bda52.jpg', '201705/11/591488b1bda52_thumb.jpg', '0');

-- ----------------------------
-- Table structure for slides
-- ----------------------------
DROP TABLE IF EXISTS `slides`;
CREATE TABLE `slides` (
  `slide_id` int(11) NOT NULL AUTO_INCREMENT,
  `slide_type` int(11) NOT NULL,
  `img_path` varchar(255) NOT NULL,
  `del_flg` int(11) NOT NULL DEFAULT '0',
  `add_date` datetime DEFAULT NULL,
  `add_user` int(11) DEFAULT NULL,
  `upd_date` datetime DEFAULT NULL,
  `upd_user` int(11) DEFAULT NULL,
  PRIMARY KEY (`slide_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of slides
-- ----------------------------
INSERT INTO `slides` VALUES ('1', '0', 'data/slides/5915b463367df.jpg', '0', '2017-04-26 21:50:18', '1', '2017-05-12 20:11:02', '1');
INSERT INTO `slides` VALUES ('3', '0', 'data/slides/5915b47279b45.jpg', '0', '2017-04-26 22:09:35', '1', '2017-05-12 20:11:16', '1');
INSERT INTO `slides` VALUES ('4', '0', 'data/slides/5915b4821a5bc.jpg', '0', '2017-04-27 20:17:54', '1', '2017-05-12 20:11:32', '1');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_no` varchar(30) NOT NULL,
  `user_name` varchar(200) NOT NULL,
  `phone` decimal(10,0) DEFAULT NULL,
  `address` varchar(500) DEFAULT NULL,
  `city` varchar(100) DEFAULT NULL,
  `district` varchar(100) DEFAULT NULL,
  `level` int(11) DEFAULT NULL,
  `del_flg` int(11) NOT NULL DEFAULT '0',
  `pass` varchar(255) NOT NULL,
  `add_date` datetime DEFAULT NULL,
  `upd_date` datetime DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'admin', 'admin 1', null, null, null, null, null, '0', '6671367c704cfadc7ef46d373d5e5714', null, '2017-05-07 16:59:39', 'admin@gmail.com');
