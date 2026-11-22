// Publication data for the site. To add a paper, copy an entry and edit it.
// Fields: year, authors, title, url, venue, ref (volume(issue), pages), pdf, code, status.

const F = "https://files.cercomp.ufg.br/weby/up/948/o/";
const GH = "https://github.com/lfprudente/";
const ME = "L. F. Prudente";

const PREPRINTS = [
  { authors: ["F. Babu", "O. P. Ferreira", ME, "J.-C. Yao", "X. Zhao"], title: "Ball-proximal point method on a Hadamard Manifolds",
    url: "https://arxiv.org/abs/2605.03815", venue: "arXiv:2605.03815", status: "Submitted", code: GH + "Broximal" },
  { authors: ["N. Fazzio", ME, "M. L. Schuverdt"], title: "An active-set method for box-constrained multiobjective optimization",
    url: "https://optimization-online.org/?p=33073", venue: "Optimization Online", status: "Submitted", code: GH + "MAMBO-paper" },
];

const JOURNAL = [
  { year: 2026, status: "To appear", authors: ["E. G. Birgin", "O. P. Ferreira", "G. Haeser", "N. Maculan", "L. Mallma Ramirez", ME],
    title: "Smoothing ℓ<sub>1</sub>-exact penalty method for intrinsically constrained Riemannian optimization problems",
    url: "https://doi.org/10.1093/imanum/drag043", venue: "IMA Journal of Numerical Analysis", ref: "", pdf: F + "SmoothingPenalty.pdf", code: GH + "Sl1EPA" },
  { year: 2026, authors: ["N. Fazzio", ME, "M. L. Schuverdt"], title: "The projected gradient direction in vector optimization: continuity and dual characterization",
    url: "https://doi.org/10.1007/s40314-025-03611-2", venue: "Computational and Applied Mathematics", ref: "45, 261", pdf: F + "continuity.pdf" },
  { year: 2026, authors: ["R. Andreani", "K. R. Couto", "O. P. Ferreira", "G. Haeser", ME], title: "Global convergence of an augmented Lagrangian method for nonlinear programming via Riemannian optimization",
    url: "https://doi.org/10.1137/24M1692319", venue: "SIAM Journal on Optimization", ref: "36(1), 466–501", pdf: F + "24m1692319.pdf", code: GH + "RiemannianAL" },
  { year: 2025, authors: ["Y. Bello Cruz", "J. G. Melo", ME, "R. V. G. Serra"], title: "A proximal gradient method with an explicit line search for multiobjective optimization",
    url: "https://doi.org/10.1007/s10589-025-00711-x", venue: "Computational Optimization and Applications", ref: "92(2), 437–469", pdf: F + "PGexplicit-R_-FINAL.pdf", code: GH + "MPG" },
  { year: 2025, authors: ["P. B. Assunção", "O. P. Ferreira", ME], title: "A generalized conditional gradient method for multiobjective composite optimization problems",
    url: "https://doi.org/10.1080/02331934.2023.2257709", venue: "Optimization", ref: "74(2), 473–503", pdf: F + "CondGradMethMutiOptSumTwo.pdf", code: GH + "CompositeMOPCondG" },
  { year: 2024, authors: [ME, "D. R. Souza"], title: "Global convergence of a BFGS-type algorithm for nonconvex multiobjective optimization problems",
    url: "https://doi.org/10.1007/s10589-024-00571-x", venue: "Computational Optimization and Applications", ref: "88(3), 719–757", pdf: F + "BFGS-Global.pdf", code: GH + "GlobalBFGS" },
  { year: 2023, authors: ["A. A. Aguiar", "O. P. Ferreira", ME], title: "Inexact gradient projection method with relative error tolerance",
    url: "https://doi.org/10.1007/s10589-022-00425-4", venue: "Computational Optimization and Applications", ref: "84(2), 363–395", pdf: F + "GradientMethodInexProj13Oct2022.pdf", code: F + "GInexPM.zip" },
  { year: 2022, authors: ["M. L. N. Gonçalves", "F. S. Lima", ME], title: "Globally convergent Newton-type methods for multiobjective optimization",
    url: "https://doi.org/10.1007/s10589-022-00414-7", venue: "Computational Optimization and Applications", ref: "83(2), 403–434", pdf: F + "NewtonMOP.pdf", code: GH + "newtonMOP" },
  { year: 2022, authors: [ME, "D. R. Souza"], title: "A quasi-Newton method with Wolfe line searches for multiobjective optimization",
    url: "https://doi.org/10.1007/s10957-022-02072-5", venue: "Journal of Optimization Theory and Applications", ref: "194, 1107–1140", pdf: F + "BFGSWolfe.pdf", code: GH + "bfgs" },
  { year: 2022, authors: ["M. L. N. Gonçalves", "F. S. Lima", ME], title: "A study of Liu-Storey conjugate gradient methods for vector optimization",
    url: "https://www.sciencedirect.com/science/article/pii/S0096300322001837", venue: "Applied Mathematics and Computation", ref: "425, 127099", pdf: F + "StudyLS.pdf" },
  { year: 2022, authors: ["O. P. Ferreira", "M. V. Lemes", ME], title: "On the inexact scaled gradient projection method",
    url: "https://doi.org/10.1007/s10589-021-00331-1", venue: "Computational Optimization and Applications", ref: "81(1), 91–125", pdf: F + "isgp.pdf", code: F + "ISPG.zip" },
  { year: 2022, authors: ["A. A. Aguiar", "O. P. Ferreira", ME], title: "Subgradient method with feasible inexact projections for constrained convex optimization problems",
    url: "https://doi.org/10.1080/02331934.2021.1902520", venue: "Optimization", ref: "71(12), 3515–3537", pdf: F + "SubgradInexPR.pdf", code: F + "SInexPD.zip" },
  { year: 2021, authors: ["R. Díaz Millán", "O. P. Ferreira", ME], title: "Alternating conditional gradient method for convex feasibility problems",
    url: "https://doi.org/10.1007/s10589-021-00293-4", venue: "Computational Optimization and Applications", ref: "80(1), 245–269", pdf: F + "AlternConditinalGradMeth.pdf", code: F + "ACondG.tar.gz" },
  { year: 2021, authors: ["P. B. Assunção", "O. P. Ferreira", ME], title: "Conditional gradient method for multiobjective optimization",
    url: "https://doi.org/10.1007/s10589-020-00260-5", venue: "Computational Optimization and Applications", ref: "78(3), 741–768", pdf: F + "CondGradMethMutiOpt.pdf", code: F + "CondGMO.zip" },
  { year: 2020, authors: ["M. L. N. Gonçalves", ME], title: "On the extension of the Hager-Zhang conjugate gradient method for vector optimization",
    url: "https://doi.org/10.1007/s10589-019-00146-1", venue: "Computational Optimization and Applications", ref: "76(3), 889–916", pdf: F + "HZCGVO.pdf", code: F + "NLCG-Aug19.tar.gz" },
  { year: 2020, authors: ["O. P. Ferreira", "M. S. Louzeiro", ME], title: "Iteration-complexity and asymptotic analysis of steepest descent method for multiobjective optimization on Riemannian manifolds",
    url: "https://doi.org/10.1007/s10957-019-01615-7", venue: "Journal of Optimization Theory and Applications", ref: "184, 507–533", pdf: F + "Manuscript_gradVec_Oct2019.pdf", code: F + "codes.tar" },
  { year: 2019, authors: ["L. R. Lucambio Pérez", ME], title: "A Wolfe line search algorithm for vector optimization",
    url: "https://dl.acm.org/citation.cfm?id=3342104", venue: "ACM Transactions on Mathematical Software", ref: "45(4), 37:1–23", pdf: F + "wolfe-acm.pdf", code: F + "LSVecOpt.tar.gz" },
  { year: 2019, authors: ["O. P. Ferreira", "M. S. Louzeiro", ME], title: "Gradient method for optimization on Riemannian manifolds with lower bounded curvature",
    url: "https://doi.org/10.1137/18M1180633", venue: "SIAM Journal on Optimization", ref: "29(4), 2517–2541", pdf: F + "M118063.pdf", code: F + "GMRiemannian.tar.gz" },
  { year: 2019, authors: ["O. P. Ferreira", "M. S. Louzeiro", ME], title: "Iteration-complexity of the subgradient method on Riemannian manifolds with lower bounded curvature",
    url: "https://doi.org/10.1080/02331934.2018.1542532", venue: "Optimization", ref: "68(4), 713–729", pdf: F + "flpsubgradient.pdf" },
  { year: 2018, authors: ["L. R. Lucambio Pérez", ME], title: "Nonlinear conjugate gradient methods for vector optimization",
    url: "https://doi.org/10.1137/17M1126588", venue: "SIAM Journal on Optimization", ref: "28(3), 2690–2720", pdf: F + "M112658.pdf", code: F + "NLCG.tar.gz" },
  { year: 2017, authors: ["J. Y. Bello Cruz", "O. P. Ferreira", "S. Z. Németh", ME], title: "A semi-smooth Newton method for projection equations and linear complementarity problems with respect to the second order cone",
    url: "https://www.sciencedirect.com/science/article/pii/S0024379516304670", venue: "Linear Algebra and its Applications", ref: "513, 160–181", pdf: F + "NMLorentz.pdf", code: F + "GMRiemannian.tar.gz" },
  { year: 2016, authors: ["J. Y. Bello Cruz", "O. P. Ferreira", ME], title: "On the global convergence of the inexact semi-smooth Newton method for absolute value equation",
    url: "https://doi.org/10.1007/s10589-016-9837-x", venue: "Computational Optimization and Applications", ref: "65(1), 93–108", pdf: F + "AVEInexact.pdf", code: F + "AVE-codes.tar.gz" },
  { year: 2015, authors: ["M. L. N. Gonçalves", "J. G. Melo", ME], title: "Augmented Lagrangian methods for nonlinear programming with possible infeasibility",
    url: "https://doi.org/10.1007/s10898-015-0289-0", venue: "Journal of Global Optimization", ref: "63(2), 297–318", pdf: F + "gmp.pdf" },
  { year: 2015, authors: ["E. G. Birgin", "J. M. Martínez", ME], title: "Optimality properties of an augmented Lagrangian method on infeasible problems",
    url: "https://doi.org/10.1007/s10589-014-9685-5", venue: "Computational Optimization and Applications", ref: "60(3), 609–631", pdf: F + "mpru3.pdf" },
  { year: 2014, authors: ["E. G. Birgin", "J. M. Martínez", ME], title: "Augmented Lagrangians with possible infeasibility and finite termination for global nonlinear programming",
    url: "https://doi.org/10.1007/s10898-013-0039-0", venue: "Journal of Global Optimization", ref: "58(2), 207–242", pdf: F + "bmpru.pdf" },
  { year: 2012, authors: ["J. M. Martínez", ME], title: "Handling infeasibility in a large-scale nonlinear optimization algorithm",
    url: "https://doi.org/10.1007/s11075-012-9561-2", venue: "Numerical Algorithms", ref: "60(2), 263–277", pdf: F + "mpru.pdf" },
];

const CHAPTERS = [
  { year: 2020, authors: ["O. P. Ferreira", "M. S. Louzeiro", ME], title: "First order methods for optimization on Riemannian manifolds",
    url: "https://link.springer.com/chapter/10.1007/978-3-030-31351-7_18",
    venue: "Handbook of Variational Methods for Nonlinear Geometric Data", ref: "P. Grohs, M. Holler, A. Weinmann (eds.), Springer, 499–525" },
];

const THESES = [
  { year: 2012, kind: "Ph.D. thesis", title: "Inviabilidade em métodos de Lagrangiano aumentado",
    url: "https://www.repositorio.unicamp.br/acervo/detalhe/862465?guid=1768259798899&returnUrl=%2fresultado%2flistar%3fguid%3d1768259798899%26quantidadePaginas%3d1%26codigoRegistro%3d862465%23862465&i=6",
    venue: "UNICAMP", ref: "Advisor: J. M. Martínez · in Portuguese", pdf: F + "Prudente_LeandrodaFonseca_D.pdf" },
  { year: 2009, kind: "Master's thesis", title: "Estimação da superfície de volatilidade dos ativos através da equação de Black-Scholes generalizada",
    url: "https://www.repositorio.unicamp.br/acervo/detalhe/441501?guid=1768259727498&returnUrl=%2fresultado%2flistar%3fguid%3d1768259727498%26quantidadePaginas%3d1%26codigoRegistro%3d441501%23441501&i=19",
    venue: "UNICAMP", ref: "Advisor: J. M. Martínez · in Portuguese", pdf: F + "Prudente_LeandrodaFonseca_M.pdf" },
];
