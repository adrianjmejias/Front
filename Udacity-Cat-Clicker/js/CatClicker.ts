export default class CatClicker{
    private ammountOfClicks: number;
    private $catClicked : Element;
    private $clickedMsg : Element;

    public CatClicker($catClicked : Element, $clickedMsg : Element){
        this.ammountOfClicks = 0;

        this.$catClicked = $catClicked;
        this.$clickedMsg = $clickedMsg;

        this.$catClicked.addEventListener('click',this.clickCat);
    }

    private clickCat(){
        this.ammountOfClicks++;
        this.$clickedMsg.innerHTML = `Llevas ${this.ammountOfClicks} clicks al gatico`;
    }
};