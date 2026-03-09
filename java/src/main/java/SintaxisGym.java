import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;

public class SintaxisGym {

     public static void main(String[] args) {
        int[] oddFilterInput = {1, 2, 3, 4};
        String textInverterString = "textineedtoinverter";
        int[] countFrequenciesInput = {10, 20, 30, 40, 10, 15, 30};

        System.out.println();
        System.out.println("Odd Filter input: " + Arrays.toString(oddFilterInput));
        System.out.println("Odd Filter output: " + evenFilter(oddFilterInput));
        System.out.println();
        System.out.println("Text Inverter input: " + textInverterString);
        System.out.println("Text Inverter output: " + textInverter(textInverterString));
        System.out.println();
        System.out.println("Count Frequencies input: " + Arrays.toString(countFrequenciesInput));
        System.out.println("Count Frequencies output: " + countFrequencies(countFrequenciesInput));
     }

    public static ArrayList<Integer> evenFilter(int[] numbers) {
        // Create ArrayList (why ArrayList? porque no sabes cuántos pares va a contener el arreglo de salida
        // un simple int[] tiene que especificar cuánta longitud debe haber en el arreglo, no es útil)
        // Number Names: "Even" has 4 letters (even, pares), and "Odd" has 3 letters (odd, impares).

        // output
        ArrayList<Integer> output = new ArrayList<>();

        // iterate
        for (int i : numbers) {
            if (i % 2 == 0) {
                output.add(i);
            }
        }

        // return
        return output;
    }

    public static String textInverter(String text) {
        // La única diferencia entre usar el bucle normal y el bucle invertido es dónde 
        // se coloca la nueva letra al momento de pegarla. Es un simple truco de concatenación.
        // normal for: izq a der. textInverted = text.charAt(i) + textInverted;
        // interved for: der a izq. textInverted = textInverted + text.charAt(i);

        // output
        String textInverted = "";

        // iterate
        for (int i = text.length() - 1; i >= 0 ; i--) {
            textInverted += text.charAt(i);
        }

        // return
        return textInverted;
    }
    
    public static HashMap<Integer, Integer> countFrequencies(int[] numbers) {
        // output
        HashMap<Integer, Integer> hashMap = new HashMap<>();

        // iterate
        // old way
        /*
        for(int i: numbers) {
            int frequency = 0;
            if (hashMap.containsKey(i)) {
                frequency = hashMap.get(i);
                hashMap.replace(i, ++frequency);
            } else {
                hashMap.put(i, ++frequency);
            }
        }
        */
        for(int num: numbers) {
            hashMap.put(num, hashMap.getOrDefault(num, 0) + 1);
        }

        // return
        return hashMap;
    }
}

