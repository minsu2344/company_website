import { Link } from 'react-router-dom';
import { menuItems } from '../../data/menu';
import { scrollToTop } from '../../utils/scroll';
import {
  FaFacebook,
  FaInstagramSquare,
  FaTwitter,
  FaLinkedin,
} from 'react-icons/fa';

function Footer() {
  return (
    <footer className='bg-gray-900 text-gray-300'>
      <div className='container mx-auto px-4 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          <div>
            <h3 className='text-xl font-bold mb-4'>회사소개</h3>
            <p className='text-gray-400'>
              저희 회사는 최고의 서비스를 제공하기 위해 노력하고 있습니다.
            </p>
          </div>

          <div>
            <h3 className='text-xl font-bold mb-4'>빠른링크</h3>
            <ul className='space-y-2'>
              {menuItems.map((menu) => {
                return (
                  <li key={menu.path}>
                    <Link
                      to={menu.path}
                      className='hover:text-white transition-colors'
                      onClick={scrollToTop}
                    >
                      {menu.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h3 className='text-xl font-bold mb-4'>연락처</h3>
            <ul className='space-y-2 text-gray-400'>
              <li>서울시 중구</li>
              <li>충무로 역 앞</li>
              <li>전화: 1577-1577</li>
              <li>이메일: info@naver.com</li>
            </ul>
          </div>

          <div>
            <h3 className='text-xl font-bold mb-4'>소셜 미디어</h3>
            <div className='flex space-x-4'>
              <a
                href='#'
                className='text-gray-400 hover:text-white transition-colors'
              >
                <FaFacebook />
              </a>
              <a
                href='#'
                className='text-gray-400 hover:text-white transition-colors'
              >
                <FaInstagramSquare />
              </a>
              <a
                href='#'
                className='text-gray-400 hover:text-white transition-colors'
              >
                <FaTwitter />
              </a>
              <a
                href='#'
                className='text-gray-400 hover:text-white transition-colors'
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        <div className='border-t border-gray-800 mt-8 pt-8 text-center text-gray-400'>
          <p>&copy; 2025 MS Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
