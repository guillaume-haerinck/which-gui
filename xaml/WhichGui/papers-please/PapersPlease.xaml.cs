using System;
using System.Collections.Generic;
using System.Linq;
using System.Media;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Animation;
using System.Windows.Media.Imaging;
using System.Windows.Shapes;

namespace WhichGui
{
    /// <summary>
    /// Interaction logic for PapersPlease.xaml
    /// </summary>
    public partial class PapersPlease : Window
    {
        public MediaPlayer music;

        public PapersPlease()
        {
            InitializeComponent();
            
            this.music = new MediaPlayer();
            music.Open(new Uri("papers-please/theme-song.mp3", UriKind.Relative));
            music.Play();
        }

        private void OnArrivalCompleted(object sender, EventArgs e)
        {
            var idle = this.FindResource("Idle") as Storyboard;
            idle.Begin();
        }
    }
}
