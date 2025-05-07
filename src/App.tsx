import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Splash from './pages/Splash';
import 'leaflet/dist/leaflet.css';
import Connection from './pages/LoginPages/Connection'
import InterestsStep from './pages/LoginPages/InterestStep'
import LoginPage from './pages/LoginPages/Login'
import LoginOrConnect from './pages/LoginPages/LoginOrConnect'
import PortfolioStep from './pages/LoginPages/PortfolioStep'
import Register from './pages/LoginPages/Register'
import RegistrationComplete from './pages/LoginPages/RegistrationComplete'
import RegistrationStepOne from './pages/LoginPages/RegistrationStepOne'
import SocialConnectStep from './pages/LoginPages/SocialConnect'
import ValidateInscription from './pages/LoginPages/ValidateIncription'
import ChatPage from './pages/EkanwePages/ChatPage'
import ConceptCommercant from './pages/EkanwePages/ConceptCommercant'
import ConceptInfluenceur from './pages/EkanwePages/ConceptInfluenceur'
import CreatorTypeCommercant from './pages/EkanwePages/CreatorTypeInfluenceur'
import CreatorTypeInfluenceur from './pages/EkanwePages/CreatorTypeCommercant'
import WelcomeInfluenceur from './pages/EkanwePages/WelcomeInfluenceur'
import WelcomeCommercant from './pages/EkanwePages/WelcomeCommercant';
import DashboardPageCommercant from './pages/CommercantPages/DashboardPage';
import DealCandidatesPageCommercant from './pages/CommercantPages/DealCandidatesPage';
import DealDetailPageCommercant from './pages/CommercantPages/DealDetailsPage';
import DealsPageCommercant from './pages/CommercantPages/DealsPage';
import DiscussionPageCommercant from './pages/CommercantPages/Discussion';
import MerchantDetailPageCommercant from './pages/CommercantPages/MerchantDetailPage';
import NotificationPageCommercant from './pages/CommercantPages/Notif';
import ProfilePageCommercant from './pages/CommercantPages/Profile';
import ProfilPublicPageCommercant from './pages/CommercantPages/ProfilPublic';
import SuiviDealsPageCommercant from './pages/CommercantPages/SuivisDeals';
import DealDetailsPageInfluenceur from './pages/InfluenceurPages/DealDetailsPage';
import DealsPageInfluenceur from './pages/InfluenceurPages/Deals';
import DealsSeeMorePageInfluenceur from './pages/InfluenceurPages/DealsSeeMore';
import DiscussionPageInfluenceur from './pages/InfluenceurPages/Discussion';
import NotificationPageInfluenceur from './pages/InfluenceurPages/NotificationPage';
import ProfilePageInfluenceur from './pages/InfluenceurPages/Profile';
import ReviewPageInfluenceur from './pages/InfluenceurPages/Review';
import SaveDealsPageInfluenceur from './pages/InfluenceurPages/SaveDealsPage';
import SuivisDealsPageInfluenceur from './pages/InfluenceurPages/SuivisDeals';
import ReviewPageCommercant from './pages/CommercantPages/Review';
import ForgotPassword from './pages/LoginPages/ForgotPassword';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "./firebase/firebase";
import { doc, getDoc } from "firebase/firestore";

function AppInitializer() {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userRef = doc(db, "users", user.uid);
        const userSnap = await getDoc(userRef);

        if (userSnap.exists()) {
          const role = userSnap.data().role;
          const inscription = userSnap.data().inscription;

          if (inscription === "1") navigate("/registrationstepone");
          else if (inscription === "2") navigate("/intereststep");
          else if (inscription === "3") navigate("/socialconnect");
          else if (inscription === "4") navigate("/portfolio");
          else if (inscription === "terminé") {
            if (role === "commerçant") navigate("/dealscommercant");
            else if (role === "influenceur") navigate("/dealsinfluenceur");
          } else {
            navigate("/register");
          }
        } else {
          navigate("/connection");
        }
      } else {
        navigate("/connection");
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  return null;
}

function App() {
  return (
    <Router>
      <AppInitializer />
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/connection" element={<Connection />} />
        <Route path="/intereststep" element={<InterestsStep />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/loginorsignup" element={<LoginOrConnect />} />
        <Route path="/portfoliostep" element={<PortfolioStep />} />
        <Route path="/register" element={<Register />} />
        <Route path="/registrationcomplete" element={<RegistrationComplete />} />
        <Route path="/registrationstepone" element={<RegistrationStepOne />} />
        <Route path="/socialconnectstep" element={<SocialConnectStep />} />
        <Route path="/validateinscription" element={<ValidateInscription />} />
        <Route path="/chat/:chatId" element={<ChatPage />} />
        <Route path="/conceptcommercant" element={<ConceptCommercant />} />
        <Route path="/conceptinfluenceur" element={<ConceptInfluenceur />} />
        <Route path="/creatorinfluenceur" element={<CreatorTypeInfluenceur />} />
        <Route path="/creatorcommercant" element={<CreatorTypeCommercant />} />
        <Route path="/welcomecommercant" element={<WelcomeCommercant />} />
        <Route path="/welcomeinfluenceur" element={<WelcomeInfluenceur />} />
        <Route path="/dashboard" element={<DashboardPageCommercant />} />
        <Route path="/dealcandidatescommercant/:dealId" element={<DealCandidatesPageCommercant />} />
        <Route path="/dealdetailcommercant/:dealId/:influenceurId" element={<DealDetailPageCommercant />} />
        <Route path="/reviewcommercant/:dealId/:influenceurId" element={<ReviewPageCommercant />} />
        <Route path="/dealscommercant" element={<DealsPageCommercant />} />
        <Route path="/discussioncommercant" element={<DiscussionPageCommercant />} />
        <Route path="/merchantdetailcommercant" element={<MerchantDetailPageCommercant />} />
        <Route path="/notificationcommercant" element={<NotificationPageCommercant />} />
        <Route path="/profilecommercant" element={<ProfilePageCommercant />} />
        <Route path="/profilpubliccommercant/:userId" element={<ProfilPublicPageCommercant />} />
        <Route path="/suividealscommercant" element={<SuiviDealsPageCommercant />} />
        <Route path="/dealdetailinfluenceur/:dealId" element={<DealDetailsPageInfluenceur />} />
        <Route path="/dealsinfluenceur" element={<DealsPageInfluenceur />} />
        <Route path="/dealsseemoreinfluenceur/:dealId" element={<DealsSeeMorePageInfluenceur />} />
        <Route path="/discussioninfluenceur" element={<DiscussionPageInfluenceur />} />
        <Route path="/notificationinfluenceur" element={<NotificationPageInfluenceur />} />
        <Route path="/profileinfluenceur" element={<ProfilePageInfluenceur />} />
        <Route path="/reviewinfluenceur/:dealId" element={<ReviewPageInfluenceur />} />
        <Route path="/savedealsinfluenceur" element={<SaveDealsPageInfluenceur />} />
        <Route path="/suivisdealsinfluenceur" element={<SuivisDealsPageInfluenceur />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
}

export default App;