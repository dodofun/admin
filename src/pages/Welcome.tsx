import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Alert, Typography, Button } from 'antd';
import { useIntl, FormattedMessage, useModel } from 'umi';
import styles from './Welcome.less';

const CodePreview: React.FC = ({ children }) => (
  <pre className={styles.pre}>
    <code>
      <Typography.Text copyable>{children}</Typography.Text>
    </code>
  </pre>
);

export default (): React.ReactNode => {
  // 第二个参数用于性能优化，当组件只需要消费 model 中的部分参数，而对其他参数的变化并不关心时，可以传入一个函数用于过滤。函数的返回值将取代 model 的返回值，成为 useModel 的最终返回值
  const counter = useModel('counter', (ret) => ({
    counter: ret.counter,
    add: ret.increment,
    minus: ret.decrement,
  }));
  const intl = useIntl();
  return (
    <PageContainer>
      <div style={{ margin: '20px' }}>
        {counter.counter}
        <Button type="primary" onClick={() => counter.minus()} style={{ margin: '0 10px' }}>
          minus
        </Button>
        <Button type="primary" onClick={() => counter.add()}>
          add
        </Button>
      </div>
      <Card>
        <Alert
          message={intl.formatMessage({
            id: 'pages.welcome.alertMessage',
            defaultMessage: '更快更强的重型组件，已经发布。',
          })}
          type="success"
          showIcon
          banner
          style={{
            margin: -12,
            marginBottom: 24,
          }}
        />
        <Typography.Text strong>
          <FormattedMessage id="pages.welcome.advancedComponent" defaultMessage="高级表格" />{' '}
          <a
            href="https://procomponents.ant.design/components/table"
            rel="noopener noreferrer"
            target="__blank"
          >
            <FormattedMessage id="pages.welcome.link" defaultMessage="欢迎使用" />
          </a>
        </Typography.Text>
        <CodePreview>yarn add @ant-design/pro-table</CodePreview>
        <Typography.Text
          strong
          style={{
            marginBottom: 12,
          }}
        >
          <FormattedMessage id="pages.welcome.advancedLayout" defaultMessage="高级布局" />{' '}
          <a
            href="https://procomponents.ant.design/components/layout"
            rel="noopener noreferrer"
            target="__blank"
          >
            <FormattedMessage id="pages.welcome.link" defaultMessage="欢迎使用" />
          </a>
        </Typography.Text>
        <CodePreview>yarn add @ant-design/pro-layout</CodePreview>
      </Card>
    </PageContainer>
  );
};
