'use client';

import { useState } from 'react';
import { Button, Modal, Tabs, Collapse, message } from 'antd';
import 'antd/dist/reset.css';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    message.success('Modal closed successfully!');
  };

  return (
    <div style={{ padding: '20px' }}>
      <Button type="primary" onClick={showModal}>
        Show Info
      </Button>
      <Modal
        title="Info"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <Tabs defaultActiveKey="1">
          <Tabs.TabPane tab="Details" key="1">
            This is the details section with some information.
          </Tabs.TabPane>
          <Tabs.TabPane tab="More Info" key="2">
            This is the more info section with additional details.
          </Tabs.TabPane>
        </Tabs>
      </Modal>
      <Collapse style={{ marginTop: '20px' }}>
        <Collapse.Panel header="Panel 1" key="1">
          Content of panel 1
        </Collapse.Panel>
        <Collapse.Panel header="Panel 2" key="2">
          Content of panel 2
        </Collapse.Panel>
      </Collapse>
    </div>
  );
}
