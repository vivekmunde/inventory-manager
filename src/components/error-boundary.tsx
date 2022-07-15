import { Card, Divider, Typography } from 'antd';
import React from 'react';

const { Text } = Typography;

type TFallbackProps = {
  error: Error
};

const Fallback: React.FC<TFallbackProps> = ({ error }: TFallbackProps) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 16,
      }}
    >
      <Card>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Text type="danger">
            Some error occured!
          </Text>
          <Divider />
          <Text type="danger">{error.toString()}</Text>
        </div>
      </Card>
    </div>
  );
};

type TState = { error: Error | undefined | null };

class ErrorBoundary extends React.Component<{ children: React.ReactNode }, TState> {
  state: TState = { error: undefined }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    this.setState({ error });
  }

  render() {
    if (this.state.error) {
      return <Fallback error={this.state.error} />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
