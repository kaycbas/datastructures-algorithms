# O(n) time | O(n) space
def reverse_list(head)
    arr = []
    ptr = head
    
    while ptr != nil
        arr.push(ptr.val)
        ptr = ptr.next
    end
    
    nextPtr = nil
    arr.each do |val|
        node = ListNode.new(val, nextPtr)
        nextPtr = node
    end
    
    return nextPtr
end