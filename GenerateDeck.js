import java.util.*;
class DeckGen {
  private String mode;
  private int sReSpecs;
  private int fReSpecs;
  private int[3] cardRatio;
  private ArrayList <
  
  public DeckGen() {
    mode = "STANDARD";
    sReSpecs = 5;
    fReSpecs = 3;
    cardRatio[0] = 2;
    cardRatio[1] = 2;
    cardRatio[2] = 1;
  }
  
  public DeckGen(String mChoice, int[3] ratioChoice) {
    sReSpecs = 5;
    fReSpecs = 3;
    for (int i = 0; i < 3; i ++) {
      cardRatio[i] = ratioChoice[i];
    }
    mode = mChoice;
  }
  
  public 
