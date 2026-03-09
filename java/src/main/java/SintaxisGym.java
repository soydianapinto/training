import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;

public class SintaxisGym {

     public static void main(String[] args) {
        int[] oddFilterInput = {1, 2, 3, 4};
        String textInverterString = "textineedtoinverter";
        int[] countFrequenciesInput = {10, 20, 30, 40};

        System.out.println();
        System.out.println("Odd Filter input: " + Arrays.toString(oddFilterInput));
        System.out.println("Odd Filter output: " + oddFilter(oddFilterInput));
        System.out.println();
        System.out.println("Text Inverter input: " + textInverterString);
        System.out.println("Text Inverter output: " + textInverter(textInverterString));
        System.out.println();
        System.out.println("Count Frequencies input: " + Arrays.toString(countFrequenciesInput));
        System.out.println("Count Frequencies output: " + countFrequencies(countFrequenciesInput));
     }

    public static ArrayList<Integer> oddFilter(int[] numbers) {
        // Create ArrayList (why? )
        ArrayList<Integer> output = new ArrayList<>();
        for (int i : numbers) {
            if (i % 2 != 0) {
                output.add(numbers[i]);
            }
        }
        return output;
    }

    public static String textInverter(String text) {
        // Code
        return "";
    }
    
    public static HashMap<Integer, Integer> countFrequencies(int[] numbers) {
        // Code
        return new HashMap<>();
    }
}

