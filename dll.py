from pprint import pprint

"""Each ListNode holds a reference to its previous node
as well as its next node in the List."""
class ListNode:
  def __init__(self, val, prev=None, next=None):
    self.prev = prev
    self.val = val
    self.next = next
  
  """Wrap the given value in a ListNode and insert it
  after this node. Note that this Node could already
  have a next node it is pointing to."""
  def insert_after(self, val):
    newNode = ListNode(val, self, self.next)
    self.next = newNode
     
  """Wrap the given value in a ListNode and insert it
  before this node. Note that this Node could already
  have a previous node it is pointing to."""
  def insert_before(self, val):
    newNode = ListNode(val, self.prev, self)
    self.prev = newNode
      
  """Rearranges this ListNode's previous and next pointers 
  accordingly, effectively deleting this ListNode."""
  def delete(self):
    # changes the previous node next to the current nodes next
    self.prev.next = self.next

    self.next.prev = self.prev 
    # do you actually delete node from memory?
      
"""Our doubly-linked list class. It holds references to 
the list's head and tail nodes."""
class List:
  def __init__(self, node=None):
    self.head = node
    self.tail = node.next if node else None
  
  """Wraps the given value in a ListNode and inserts it 
  as the new head of the list. Don't forget to handle 
  the old head node's previous pointer accordingly."""
  def add_to_head(self, val):
    # sol 1
    # newNode = ListNode(val, prev = None, next = self.head)
    # sol 2
    newNode = ListNode(val, prev = None, next = self.head)
    # self.head.insert_before(newNode)
    self.head = newNode
    if self.head:
        self.head.prev = newNode
    else:
        self.tail = newNode
    
    self.head = newNode
    
  """Removes the List's current head node, making the
  current head's next node the new head of the List.
  Returns the removed Node."""
  def shift(self):
    # self.head.delete()
    # the new head is the heads next
    # removedHead = self.head
    # self.head = self.head.next
    # # the new head should have a None for prev
    # self.head.prev = None
    # return removedHead
    if not self.head:
        if not self.tail:
            return None
        return self.remove_from_tail()
    else:
        curHead = self.head
        self.head = self.head.next
        self.head.prev = None
        return curHead.val

      
  """Wraps the given value in a ListNode and inserts it 
  as the new tail of the list. Don't forget to handle 
  the old tail node's next pointer accordingly."""
  def add_to_tail(self, val):
      if not self.tail:
        newNode = ListNode(val, prev = self.tail)
        # point tail to the newNode
        # self.tail.next = newNode
        # set the tail to be the new node
        self.tail = newNode
    elif not self.head:
        self.head = self.tail
        self.tail = ListNode(val, self.head, None)
    else:
        self.tail = List(val, self.tail, None)
        self.tail.prev.next = self.tail
      
  """Removes the List's current tail node, making the 
  current tail's previous node the new tail of the List.
  Returns the removed Node."""
  def remove_from_tail(self):
      if not self.tail:
          if not self.head:
              return None
    
    # tailPrev = self.tail.prev
    # # set tails prev to None
    # tailPrev.next = None
    # # set the new tail to to be the once tails prev
    # self.tail = tailPrev

    # do we actually delete tail from memory?
      
  """Removes the input node from its current spot in the 
  List and inserts it as the new head node of the List."""
  def move_to_front(self, node):
    val = node.val
    if node is self.tail:
    	self.remove_from_tail()
	else:
		node.delete()
    # # node.prev = node.next
    # # self.delete(node)
    # self.delete()
    # self.add_to_head(node)
    
  """Removes the input node from its current spot in the 
  List and inserts it as the new tail node of the List."""
  def move_to_end(self, node):
    # node.prev = node.next
    self.delete()
    self.add_to_tail(node)

# dll = List()
# dll.add_to_head(1)
# dll.add_to_tail(2)
# dll.add_to_tail(3)

# print dll.tail.val
# pprint(vars(dll))