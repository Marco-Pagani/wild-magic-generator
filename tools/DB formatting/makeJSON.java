import java.util.*;
import java.io.*;

public class makeJSON {

    public static void main(String args[]) {

        String fileName = "Effect Fixed.txt";
        String outFile = "table1_2.json";

        // This will reference one line at a time
        String line = null;

        try {
            // FileReader reads text files in the default encoding.
            FileReader fileReader = new FileReader(fileName);
            FileWriter fileWriter = new FileWriter(outFile);

            // Always wrap FileReader in BufferedReader.
            BufferedReader bufferedReader = new BufferedReader(fileReader);
            BufferedWriter bufferedWriter = new BufferedWriter(fileWriter);

            bufferedWriter.write("{\n\"effects\": [\n");
            boolean first = true;

            while ((line = bufferedReader.readLine()) != null) {
                
                String number = line.substring(0, 4);
                String rest = line.substring(5, line.length());
                rest = rest.replace("\"", "\\\"");
                
                if(!first){
                    bufferedWriter.write(",\n");
                }
                bufferedWriter.write("{\n");
                bufferedWriter.write("\"index\": \"" + number + "\",\n\"text\": \"" + rest + "\"\n");
                bufferedWriter.write("}");
                first = false;
            }

            bufferedWriter.write("\n]\n}");

            // Always close files.
            bufferedReader.close();
            bufferedWriter.close();

        } catch (FileNotFoundException ex) {
            System.out.println("Unable to open file '" + fileName + "'");
        } catch (IOException ex) {
            System.out.println("Error reading file '" + fileName + "'");
            // Or we could just do this:
            // ex.printStackTrace();

        }
    }
}