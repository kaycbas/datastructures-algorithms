# O(n) time | O(n) space - where n is the length of the address
def defang_i_paddr(address)
    defanged = []
    
    address.each_char do |char|
        newChar = char == '.' ? '[.]' : char
        defanged.push(newChar)
    end
    
    return defanged.join('')
end