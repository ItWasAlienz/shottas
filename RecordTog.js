
function paint()
{
	var val = box.getvalueof()[0]; // this is an array of size 1
	var viewsize = mgraphics.size;
	var valrange = box.getattr("size");
	var width = viewsize[0];
	var height = viewsize[1];
	var start;

	mgraphics.set_source_rgba(box.getattr("bgcolor"));
	mgraphics.rectangle(0, 0, width, height);
	mgraphics.fill();

	if (val) {
		mgraphics.set_source_rgba(box.getattr("checkedcolor"));	
		mgraphics.set_line_width((1./12.) *  box.getattr("thickness") * 0.005 * width);
		mgraphics.set_line_cap("round");
	
		mgraphics.move_to(width*0.5, height*0.5);
		mgraphics.arc(width*0.5, height*0.5,width*0.2,0.,6.28);
		mgraphics.fill();
	
		mgraphics.scale_source_rgba(0.9, 0.9, 0.9, 1);
		mgraphics.set_source_rgba(box.getattr("checkedcolor"));
		mgraphics.move_to(width*0.5, height*0.5);
		mgraphics.arc(width*0.5, height*0.5,width*0.25,0.,6.28);
		mgraphics.stroke();
		mgraphics.scale_source_rgba(0.8, 0.8, 0.8, 1);
		mgraphics.set_source_rgba(box.getattr("checkedcolor"));
		mgraphics.move_to(width*0.5, height*0.5);
		mgraphics.arc(width*0.5, height*0.5,width*0.3,0.,6.28);
		mgraphics.stroke();
		mgraphics.scale_source_rgba(0.7, 0.7, 0.7, 1);
		mgraphics.set_source_rgba(box.getattr("checkedcolor"));
		mgraphics.move_to(width*0.5, height*0.5);
		mgraphics.arc(width*0.5, height*0.5,width*0.35,0.,6.28);
		mgraphics.stroke();
		mgraphics.scale_source_rgba(0.6, 0.6, 0.6, 1);
		mgraphics.set_source_rgba(box.getattr("checkedcolor"));
		mgraphics.move_to(width*0.5, height*0.5);
		mgraphics.arc(width*0.5, height*0.5,width*0.4,0.,6.28);
		mgraphics.stroke();
		mgraphics.scale_source_rgba(0.5, 0.5, 0.5, 1);
		mgraphics.set_source_rgba(box.getattr("checkedcolor"));
		mgraphics.move_to(width*0.5, height*0.5);
		mgraphics.arc(width*0.5, height*0.5,width*0.45,0.,6.28);
		mgraphics.stroke();
		mgraphics.scale_source_rgba(0.4, 0.4, 0.4, 1);
		mgraphics.set_source_rgba(box.getattr("checkedcolor"));
		mgraphics.move_to(width*0.5, height*0.5);
		mgraphics.arc(width*0.5, height*0.5,width*0.5,0.,6.28);
		mgraphics.stroke();
		mgraphics.scale_source_rgba(0.3, 0.3, 0.3, 1);
		mgraphics.set_source_rgba(box.getattr("checkedcolor"));
		mgraphics.move_to(width*0.5, height*0.5);
		mgraphics.arc(width*0.5, height*0.5,width*0.55,0.,6.28);
		mgraphics.stroke();
		mgraphics.scale_source_rgba(0.2, 0.2, 0.2, 1);
		mgraphics.set_source_rgba(box.getattr("checkedcolor"));
		mgraphics.move_to(width*0.5, height*0.5);
		mgraphics.arc(width*0.5, height*0.5,width*0.6,0.,6.28);
		mgraphics.stroke();

	} else {
		mgraphics.scale_source_rgba(0.2, 0.2, 0.2, 1);
		mgraphics.set_source_rgba(box.getattr("uncheckedcolor"));	
		mgraphics.set_line_width((1./12.) *  box.getattr("thickness") * 0.005 * width);
		mgraphics.set_line_cap("round");
	
		mgraphics.move_to(width*0.5, height*0.5);
		mgraphics.arc(width*0.5, height*0.5,width*0.2,0.,6.28);
		mgraphics.fill();
	
		mgraphics.scale_source_rgba(0.6, 0.6, 0.6, 1);
		mgraphics.set_source_rgba(box.getattr("uncheckedcolor"));
		mgraphics.move_to(width*0.5, height*0.5);
		mgraphics.arc(width*0.5, height*0.5,width*0.25,0.,6.28);
		mgraphics.stroke();
		mgraphics.scale_source_rgba(1.5, 1.5, 1.5, 1);
		mgraphics.set_source_rgba(box.getattr("uncheckedcolor"));
		mgraphics.move_to(width*0.5, height*0.5);
		mgraphics.arc(width*0.5, height*0.5,width*0.3,0.,6.28);
		mgraphics.stroke();
		mgraphics.scale_source_rgba(1.5, 1.5, 1.5, 1);
		mgraphics.set_source_rgba(box.getattr("uncheckedcolor"));
		mgraphics.move_to(width*0.5, height*0.5);
		mgraphics.arc(width*0.5, height*0.5,width*0.35,0.,6.28);
		mgraphics.stroke();
		mgraphics.scale_source_rgba(1.5, 1.5, 1.5, 1);
		mgraphics.set_source_rgba(box.getattr("uncheckedcolor"));
		mgraphics.move_to(width*0.5, height*0.5);
		mgraphics.arc(width*0.5, height*0.5,width*0.4,0.,6.28);
		mgraphics.stroke();
		mgraphics.scale_source_rgba(1.2, 1.2, 1.2, 1);
		mgraphics.set_source_rgba(box.getattr("uncheckedcolor"));
		mgraphics.move_to(width*0.5, height*0.5);
		mgraphics.arc(width*0.5, height*0.5,width*0.45,0.,6.28);
		mgraphics.stroke();
	}	
}


