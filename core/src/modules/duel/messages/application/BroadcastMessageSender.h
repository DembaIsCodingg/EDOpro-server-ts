#ifndef BROADCAST_MESSAGE_HANDLER
#define BROADCAST_MESSAGE_HANDLER

#include <vector>
#include <iostream>

class BroadcastMessageSender {
public:
  void send(std::vector<uint8_t> message);
};

#endif