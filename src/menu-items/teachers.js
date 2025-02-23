import { AuditOutlined } from '@ant-design/icons';

const icons = {
  AuditOutlined
};

const teachers = {
  id: 'teachers',
  title: 'Teachers',
  type: 'group',
  children: [
    {
      id: 'teachers',
      title: 'Teachers',
      type: 'item',
      url: '/teachers',
      icon: icons.AuditOutlined,
      breadcrumbs: false
    }
  ]
};

export default teachers;
