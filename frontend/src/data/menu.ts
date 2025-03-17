interface MenuItem {
  path: string;
  label: string;
}

const menuItems: MenuItem[] = [
  {
    path: "/", label: '홈'
  },
  {
    path: "/about", label: '회사정보'
  },
  {
    path: "/leadership", label: '임원소개'
  },
  {
    path: "/board", label: '업무게시판'
  },
  {
    path: "/our-services", label: '제공기술'
  },
  {
    path: "/contact", label: '문의하기'
  },
]

export {menuItems}