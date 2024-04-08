(function() {var type_impls = {
"libp2p":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Config\" class=\"impl\"><a class=\"src rightside\" href=\"src/libp2p_yamux/lib.rs.html#262\">source</a><a href=\"#impl-Config\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"struct\" href=\"libp2p/yamux/struct.Config.html\" title=\"struct libp2p::yamux::Config\">Config</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.client\" class=\"method\"><a class=\"src rightside\" href=\"src/libp2p_yamux/lib.rs.html#265\">source</a><h4 class=\"code-header\">pub fn <a href=\"libp2p/yamux/struct.Config.html#tymethod.client\" class=\"fn\">client</a>() -&gt; <a class=\"struct\" href=\"libp2p/yamux/struct.Config.html\" title=\"struct libp2p::yamux::Config\">Config</a></h4></section></summary><div class=\"docblock\"><p>Creates a new <code>YamuxConfig</code> in client mode, regardless of whether\nit will be used for an inbound or outbound upgrade.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.server\" class=\"method\"><a class=\"src rightside\" href=\"src/libp2p_yamux/lib.rs.html#274\">source</a><h4 class=\"code-header\">pub fn <a href=\"libp2p/yamux/struct.Config.html#tymethod.server\" class=\"fn\">server</a>() -&gt; <a class=\"struct\" href=\"libp2p/yamux/struct.Config.html\" title=\"struct libp2p::yamux::Config\">Config</a></h4></section></summary><div class=\"docblock\"><p>Creates a new <code>YamuxConfig</code> in server mode, regardless of whether\nit will be used for an inbound or outbound upgrade.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.set_receive_window_size\" class=\"method\"><a class=\"src rightside\" href=\"src/libp2p_yamux/lib.rs.html#282\">source</a><h4 class=\"code-header\">pub fn <a href=\"libp2p/yamux/struct.Config.html#tymethod.set_receive_window_size\" class=\"fn\">set_receive_window_size</a>(&amp;mut self, num_bytes: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.u32.html\">u32</a>) -&gt; &amp;mut <a class=\"struct\" href=\"libp2p/yamux/struct.Config.html\" title=\"struct libp2p::yamux::Config\">Config</a></h4></section></summary><div class=\"docblock\"><p>Sets the size (in bytes) of the receive window per substream.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.set_max_buffer_size\" class=\"method\"><a class=\"src rightside\" href=\"src/libp2p_yamux/lib.rs.html#288\">source</a><h4 class=\"code-header\">pub fn <a href=\"libp2p/yamux/struct.Config.html#tymethod.set_max_buffer_size\" class=\"fn\">set_max_buffer_size</a>(&amp;mut self, num_bytes: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.usize.html\">usize</a>) -&gt; &amp;mut <a class=\"struct\" href=\"libp2p/yamux/struct.Config.html\" title=\"struct libp2p::yamux::Config\">Config</a></h4></section></summary><div class=\"docblock\"><p>Sets the maximum size (in bytes) of the receive buffer per substream.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.set_max_num_streams\" class=\"method\"><a class=\"src rightside\" href=\"src/libp2p_yamux/lib.rs.html#294\">source</a><h4 class=\"code-header\">pub fn <a href=\"libp2p/yamux/struct.Config.html#tymethod.set_max_num_streams\" class=\"fn\">set_max_num_streams</a>(&amp;mut self, num_streams: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.usize.html\">usize</a>) -&gt; &amp;mut <a class=\"struct\" href=\"libp2p/yamux/struct.Config.html\" title=\"struct libp2p::yamux::Config\">Config</a></h4></section></summary><div class=\"docblock\"><p>Sets the maximum number of concurrent substreams.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.set_window_update_mode\" class=\"method\"><a class=\"src rightside\" href=\"src/libp2p_yamux/lib.rs.html#301\">source</a><h4 class=\"code-header\">pub fn <a href=\"libp2p/yamux/struct.Config.html#tymethod.set_window_update_mode\" class=\"fn\">set_window_update_mode</a>(&amp;mut self, mode: <a class=\"struct\" href=\"libp2p/yamux/struct.WindowUpdateMode.html\" title=\"struct libp2p::yamux::WindowUpdateMode\">WindowUpdateMode</a>) -&gt; &amp;mut <a class=\"struct\" href=\"libp2p/yamux/struct.Config.html\" title=\"struct libp2p::yamux::Config\">Config</a></h4></section></summary><div class=\"docblock\"><p>Sets the window update mode that determines when the remote\nis given new credit for sending more data.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.into_local\" class=\"method\"><a class=\"src rightside\" href=\"src/libp2p_yamux/lib.rs.html#308\">source</a><h4 class=\"code-header\">pub fn <a href=\"libp2p/yamux/struct.Config.html#tymethod.into_local\" class=\"fn\">into_local</a>(self) -&gt; <a class=\"struct\" href=\"libp2p/yamux/struct.LocalConfig.html\" title=\"struct libp2p::yamux::LocalConfig\">LocalConfig</a></h4></section></summary><div class=\"docblock\"><p>Converts the config into a <a href=\"libp2p/yamux/struct.LocalConfig.html\" title=\"struct libp2p::yamux::LocalConfig\"><code>LocalConfig</code></a> for use with upgrades\nof I/O streams that are ![<code>Send</code>].</p>\n</div></details></div></details>",0,"libp2p::yamux::YamuxConfig"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-Config\" class=\"impl\"><a class=\"src rightside\" href=\"src/libp2p_yamux/lib.rs.html#313\">source</a><a href=\"#impl-Default-for-Config\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"libp2p/yamux/struct.Config.html\" title=\"struct libp2p::yamux::Config\">Config</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/libp2p_yamux/lib.rs.html#314\">source</a><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.1/core/default/trait.Default.html#tymethod.default\" class=\"fn\">default</a>() -&gt; <a class=\"struct\" href=\"libp2p/yamux/struct.Config.html\" title=\"struct libp2p::yamux::Config\">Config</a></h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a href=\"https://doc.rust-lang.org/1.77.1/core/default/trait.Default.html#tymethod.default\">Read more</a></div></details></div></details>","Default","libp2p::yamux::YamuxConfig"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-Config\" class=\"impl\"><a class=\"src rightside\" href=\"src/libp2p_yamux/lib.rs.html#207\">source</a><a href=\"#impl-Debug-for-Config\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"libp2p/yamux/struct.Config.html\" title=\"struct libp2p::yamux::Config\">Config</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/libp2p_yamux/lib.rs.html#207\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.1/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.1/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.1/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.1/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.77.1/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","libp2p::yamux::YamuxConfig"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-InboundUpgrade%3CC%3E-for-Config\" class=\"impl\"><a class=\"src rightside\" href=\"src/libp2p_yamux/lib.rs.html#341-343\">source</a><a href=\"#impl-InboundUpgrade%3CC%3E-for-Config\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;C&gt; <a class=\"trait\" href=\"libp2p/trait.InboundUpgrade.html\" title=\"trait libp2p::InboundUpgrade\">InboundUpgrade</a>&lt;C&gt; for <a class=\"struct\" href=\"libp2p/yamux/struct.Config.html\" title=\"struct libp2p::yamux::Config\">Config</a><div class=\"where\">where\n    C: <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncWrite.html\" title=\"trait futures_io::if_std::AsyncWrite\">AsyncWrite</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> + 'static,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Output\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Output\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"libp2p/trait.InboundUpgrade.html#associatedtype.Output\" class=\"associatedtype\">Output</a> = <a class=\"struct\" href=\"libp2p/yamux/struct.Muxer.html\" title=\"struct libp2p::yamux::Muxer\">Muxer</a>&lt;<a class=\"struct\" href=\"libp2p/yamux/struct.Incoming.html\" title=\"struct libp2p::yamux::Incoming\">Incoming</a>&lt;C&gt;&gt;</h4></section></summary><div class='docblock'>Output after the upgrade has been successfully negotiated and the handshake performed.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Error\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Error\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"libp2p/trait.InboundUpgrade.html#associatedtype.Error\" class=\"associatedtype\">Error</a> = <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.1/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a></h4></section></summary><div class='docblock'>Possible error during the handshake.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Future\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Future\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"libp2p/trait.InboundUpgrade.html#associatedtype.Future\" class=\"associatedtype\">Future</a> = <a class=\"struct\" href=\"futures_util/future/ready/struct.Ready.html\" title=\"struct futures_util::future::ready::Ready\">Ready</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.1/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;&lt;<a class=\"struct\" href=\"libp2p/yamux/struct.Config.html\" title=\"struct libp2p::yamux::Config\">Config</a> as <a class=\"trait\" href=\"libp2p/trait.InboundUpgrade.html\" title=\"trait libp2p::InboundUpgrade\">InboundUpgrade</a>&lt;C&gt;&gt;::<a class=\"associatedtype\" href=\"libp2p/trait.InboundUpgrade.html#associatedtype.Output\" title=\"type libp2p::InboundUpgrade::Output\">Output</a>, &lt;<a class=\"struct\" href=\"libp2p/yamux/struct.Config.html\" title=\"struct libp2p::yamux::Config\">Config</a> as <a class=\"trait\" href=\"libp2p/trait.InboundUpgrade.html\" title=\"trait libp2p::InboundUpgrade\">InboundUpgrade</a>&lt;C&gt;&gt;::<a class=\"associatedtype\" href=\"libp2p/trait.InboundUpgrade.html#associatedtype.Error\" title=\"type libp2p::InboundUpgrade::Error\">Error</a>&gt;&gt;</h4></section></summary><div class='docblock'>Future that performs the handshake with the remote.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.upgrade_inbound\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/libp2p_yamux/lib.rs.html#349\">source</a><a href=\"#method.upgrade_inbound\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"libp2p/trait.InboundUpgrade.html#tymethod.upgrade_inbound\" class=\"fn\">upgrade_inbound</a>(\n    self,\n    io: C,\n    _: &lt;<a class=\"struct\" href=\"libp2p/yamux/struct.Config.html\" title=\"struct libp2p::yamux::Config\">Config</a> as <a class=\"trait\" href=\"libp2p/core/trait.UpgradeInfo.html\" title=\"trait libp2p::core::UpgradeInfo\">UpgradeInfo</a>&gt;::<a class=\"associatedtype\" href=\"libp2p/core/trait.UpgradeInfo.html#associatedtype.Info\" title=\"type libp2p::core::UpgradeInfo::Info\">Info</a>\n) -&gt; &lt;<a class=\"struct\" href=\"libp2p/yamux/struct.Config.html\" title=\"struct libp2p::yamux::Config\">Config</a> as <a class=\"trait\" href=\"libp2p/trait.InboundUpgrade.html\" title=\"trait libp2p::InboundUpgrade\">InboundUpgrade</a>&lt;C&gt;&gt;::<a class=\"associatedtype\" href=\"libp2p/trait.InboundUpgrade.html#associatedtype.Future\" title=\"type libp2p::InboundUpgrade::Future\">Future</a></h4></section></summary><div class='docblock'>After we have determined that the remote supports one of the protocols we support, this\nmethod is called to start the handshake. <a href=\"libp2p/trait.InboundUpgrade.html#tymethod.upgrade_inbound\">Read more</a></div></details></div></details>","InboundUpgrade<C>","libp2p::yamux::YamuxConfig"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-Config\" class=\"impl\"><a class=\"src rightside\" href=\"src/libp2p_yamux/lib.rs.html#207\">source</a><a href=\"#impl-Clone-for-Config\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"libp2p/yamux/struct.Config.html\" title=\"struct libp2p::yamux::Config\">Config</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/libp2p_yamux/lib.rs.html#207\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.1/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"libp2p/yamux/struct.Config.html\" title=\"struct libp2p::yamux::Config\">Config</a></h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.77.1/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.77.1/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.1/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.77.1/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","libp2p::yamux::YamuxConfig"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-UpgradeInfo-for-Config\" class=\"impl\"><a class=\"src rightside\" href=\"src/libp2p_yamux/lib.rs.html#323\">source</a><a href=\"#impl-UpgradeInfo-for-Config\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"libp2p/core/trait.UpgradeInfo.html\" title=\"trait libp2p::core::UpgradeInfo\">UpgradeInfo</a> for <a class=\"struct\" href=\"libp2p/yamux/struct.Config.html\" title=\"struct libp2p::yamux::Config\">Config</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Info\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Info\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"libp2p/core/trait.UpgradeInfo.html#associatedtype.Info\" class=\"associatedtype\">Info</a> = &amp;'static [<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.1/std/primitive.u8.html\">u8</a>]</h4></section></summary><div class='docblock'>Opaque type representing a negotiable protocol.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.InfoIter\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.InfoIter\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"libp2p/core/trait.UpgradeInfo.html#associatedtype.InfoIter\" class=\"associatedtype\">InfoIter</a> = <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.1/core/iter/sources/once/struct.Once.html\" title=\"struct core::iter::sources::once::Once\">Once</a>&lt;&lt;<a class=\"struct\" href=\"libp2p/yamux/struct.Config.html\" title=\"struct libp2p::yamux::Config\">Config</a> as <a class=\"trait\" href=\"libp2p/core/trait.UpgradeInfo.html\" title=\"trait libp2p::core::UpgradeInfo\">UpgradeInfo</a>&gt;::<a class=\"associatedtype\" href=\"libp2p/core/trait.UpgradeInfo.html#associatedtype.Info\" title=\"type libp2p::core::UpgradeInfo::Info\">Info</a>&gt;</h4></section></summary><div class='docblock'>Iterator returned by <code>protocol_info</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.protocol_info\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/libp2p_yamux/lib.rs.html#327\">source</a><a href=\"#method.protocol_info\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"libp2p/core/trait.UpgradeInfo.html#tymethod.protocol_info\" class=\"fn\">protocol_info</a>(&amp;self) -&gt; &lt;<a class=\"struct\" href=\"libp2p/yamux/struct.Config.html\" title=\"struct libp2p::yamux::Config\">Config</a> as <a class=\"trait\" href=\"libp2p/core/trait.UpgradeInfo.html\" title=\"trait libp2p::core::UpgradeInfo\">UpgradeInfo</a>&gt;::<a class=\"associatedtype\" href=\"libp2p/core/trait.UpgradeInfo.html#associatedtype.InfoIter\" title=\"type libp2p::core::UpgradeInfo::InfoIter\">InfoIter</a></h4></section></summary><div class='docblock'>Returns the list of protocols that are supported. Used during the negotiation process.</div></details></div></details>","UpgradeInfo","libp2p::yamux::YamuxConfig"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-OutboundUpgrade%3CC%3E-for-Config\" class=\"impl\"><a class=\"src rightside\" href=\"src/libp2p_yamux/lib.rs.html#370-372\">source</a><a href=\"#impl-OutboundUpgrade%3CC%3E-for-Config\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;C&gt; <a class=\"trait\" href=\"libp2p/trait.OutboundUpgrade.html\" title=\"trait libp2p::OutboundUpgrade\">OutboundUpgrade</a>&lt;C&gt; for <a class=\"struct\" href=\"libp2p/yamux/struct.Config.html\" title=\"struct libp2p::yamux::Config\">Config</a><div class=\"where\">where\n    C: <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncRead.html\" title=\"trait futures_io::if_std::AsyncRead\">AsyncRead</a> + <a class=\"trait\" href=\"futures_io/if_std/trait.AsyncWrite.html\" title=\"trait futures_io::if_std::AsyncWrite\">AsyncWrite</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.1/core/marker/trait.Unpin.html\" title=\"trait core::marker::Unpin\">Unpin</a> + 'static,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Output\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Output\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"libp2p/trait.OutboundUpgrade.html#associatedtype.Output\" class=\"associatedtype\">Output</a> = <a class=\"struct\" href=\"libp2p/yamux/struct.Muxer.html\" title=\"struct libp2p::yamux::Muxer\">Muxer</a>&lt;<a class=\"struct\" href=\"libp2p/yamux/struct.Incoming.html\" title=\"struct libp2p::yamux::Incoming\">Incoming</a>&lt;C&gt;&gt;</h4></section></summary><div class='docblock'>Output after the upgrade has been successfully negotiated and the handshake performed.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Error\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Error\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"libp2p/trait.OutboundUpgrade.html#associatedtype.Error\" class=\"associatedtype\">Error</a> = <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.1/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a></h4></section></summary><div class='docblock'>Possible error during the handshake.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.Future\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Future\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"libp2p/trait.OutboundUpgrade.html#associatedtype.Future\" class=\"associatedtype\">Future</a> = <a class=\"struct\" href=\"futures_util/future/ready/struct.Ready.html\" title=\"struct futures_util::future::ready::Ready\">Ready</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.1/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;&lt;<a class=\"struct\" href=\"libp2p/yamux/struct.Config.html\" title=\"struct libp2p::yamux::Config\">Config</a> as <a class=\"trait\" href=\"libp2p/trait.OutboundUpgrade.html\" title=\"trait libp2p::OutboundUpgrade\">OutboundUpgrade</a>&lt;C&gt;&gt;::<a class=\"associatedtype\" href=\"libp2p/trait.OutboundUpgrade.html#associatedtype.Output\" title=\"type libp2p::OutboundUpgrade::Output\">Output</a>, &lt;<a class=\"struct\" href=\"libp2p/yamux/struct.Config.html\" title=\"struct libp2p::yamux::Config\">Config</a> as <a class=\"trait\" href=\"libp2p/trait.OutboundUpgrade.html\" title=\"trait libp2p::OutboundUpgrade\">OutboundUpgrade</a>&lt;C&gt;&gt;::<a class=\"associatedtype\" href=\"libp2p/trait.OutboundUpgrade.html#associatedtype.Error\" title=\"type libp2p::OutboundUpgrade::Error\">Error</a>&gt;&gt;</h4></section></summary><div class='docblock'>Future that performs the handshake with the remote.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.upgrade_outbound\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/libp2p_yamux/lib.rs.html#378\">source</a><a href=\"#method.upgrade_outbound\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"libp2p/trait.OutboundUpgrade.html#tymethod.upgrade_outbound\" class=\"fn\">upgrade_outbound</a>(\n    self,\n    io: C,\n    _: &lt;<a class=\"struct\" href=\"libp2p/yamux/struct.Config.html\" title=\"struct libp2p::yamux::Config\">Config</a> as <a class=\"trait\" href=\"libp2p/core/trait.UpgradeInfo.html\" title=\"trait libp2p::core::UpgradeInfo\">UpgradeInfo</a>&gt;::<a class=\"associatedtype\" href=\"libp2p/core/trait.UpgradeInfo.html#associatedtype.Info\" title=\"type libp2p::core::UpgradeInfo::Info\">Info</a>\n) -&gt; &lt;<a class=\"struct\" href=\"libp2p/yamux/struct.Config.html\" title=\"struct libp2p::yamux::Config\">Config</a> as <a class=\"trait\" href=\"libp2p/trait.OutboundUpgrade.html\" title=\"trait libp2p::OutboundUpgrade\">OutboundUpgrade</a>&lt;C&gt;&gt;::<a class=\"associatedtype\" href=\"libp2p/trait.OutboundUpgrade.html#associatedtype.Future\" title=\"type libp2p::OutboundUpgrade::Future\">Future</a></h4></section></summary><div class='docblock'>After we have determined that the remote supports one of the protocols we support, this\nmethod is called to start the handshake. <a href=\"libp2p/trait.OutboundUpgrade.html#tymethod.upgrade_outbound\">Read more</a></div></details></div></details>","OutboundUpgrade<C>","libp2p::yamux::YamuxConfig"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()