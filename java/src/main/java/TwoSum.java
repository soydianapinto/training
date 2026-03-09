import java.util.Arrays;
import java.util.HashMap;

public class TwoSum {
    public static void main(String[] args) {
        int[] nums = {2, 7, 11, 15};
        int target = 9;

        // expected output: [0, 1]
        System.out.println(Arrays.toString(twoSum(nums, target)));

    }

    public static int[] twoSum(int[] nums, int target) {
        // Memory
        HashMap<Integer, Integer> hashMap = new HashMap<>();

        // Iterate
        for(int i=0; i < nums.length; i++) {
            // Complement = 9 - current num
            int complement = target - nums[i];
            
            // do we already have the complement in the memory?
            if (hashMap.containsKey(complement)) {
                // Return
                return new int[] { hashMap.get(complement), i};
            } else {
                // Keep tracking of value & its index
                hashMap.put(nums[i], i);
            }
        }
        return new int[] {};
    }
}
