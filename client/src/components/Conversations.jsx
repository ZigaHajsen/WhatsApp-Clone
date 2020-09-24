import React from 'react';

import { useConversations } from '../contexts/ConversationsProvider';

import { ListGroup } from 'react-bootstrap';

const Conversations = () => {
  const { conversations, selectConversationIndex } = useConversations();

  return (
    <ListGroup variant='flush'>
      {conversations.map((conversation, index) => (
        <ListGroup.Item
          key={index}
          action
          onClick={() => selectConversationIndex(index)}
          active={conversation.selected}
        >
          {conversation.recipients
            .map((recipient) => recipient.name)
            .join(', ')}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default Conversations;
