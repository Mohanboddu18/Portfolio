import React, { useState, useEffect, useRef } from 'react';

export default function PdfModal({ isOpen, title, url, onClose }) {
  const [imageScale, setImageScale] = useState(1);
  const pinchStartDistanceRef = useRef(0);
  const pinchStartScaleRef = useRef(1);

  const pdfEmbedParams =
    'toolbar=0&navpanes=0&statusbar=0&messages=0&view=FitB&zoom=page-fit';

  const isPdf = (srcUrl) => /\.pdf(?:$|[?#])/i.test(srcUrl || '');
  const isImage = (srcUrl) =>
    /\.(png|jpe?g|gif|webp|bmp|svg)(?:$|[?#])/i.test(srcUrl || '');

  const getPreviewUrl = (rawUrl) => {
    const cleanUrl = (rawUrl || '').trim();
    if (!cleanUrl) return '';

    let fullUrl = cleanUrl;
    if (!cleanUrl.startsWith('http://') && !cleanUrl.startsWith('https://')) {
      try {
        fullUrl = new URL(cleanUrl, window.location.href).href;
      } catch (e) {
        fullUrl = cleanUrl;
      }
    }

    if (!isPdf(fullUrl)) return fullUrl;

    const [baseUrl, hashPart] = fullUrl.split('#');
    const nextHash = hashPart ? `${hashPart}&${pdfEmbedParams}` : pdfEmbedParams;
    return `${baseUrl}#${nextHash}`;
  };

  useEffect(() => {
    if (isOpen) {
      setImageScale(1);
      document.body.style.overflow = 'hidden';
      window.history.pushState({ modal: true }, '');

      const handlePopstate = () => {
        onClose();
      };
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };

      window.addEventListener('popstate', handlePopstate);
      document.addEventListener('keydown', handleKeyDown);

      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('popstate', handlePopstate);
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen]);

  const handleWheel = (e) => {
    if (!isImage(url)) return;
    e.preventDefault();
    const step = e.deltaY < 0 ? 0.15 : -0.15;
    setImageScale((prev) => Math.min(4, Math.max(1, prev + step)));
  };

  const getTouchDistance = (touchA, touchB) => {
    const dx = touchA.clientX - touchB.clientX;
    const dy = touchA.clientY - touchB.clientY;
    return Math.hypot(dx, dy);
  };

  const handleTouchStart = (e) => {
    if (!isImage(url)) return;
    if (e.touches.length === 2) {
      pinchStartDistanceRef.current = getTouchDistance(e.touches[0], e.touches[1]);
      pinchStartScaleRef.current = imageScale;
    }
  };

  const handleTouchMove = (e) => {
    if (!isImage(url)) return;
    if (e.touches.length === 2 && pinchStartDistanceRef.current > 0) {
      e.preventDefault();
      const currentDist = getTouchDistance(e.touches[0], e.touches[1]);
      const ratio = currentDist / pinchStartDistanceRef.current;
      setImageScale(Math.min(4, Math.max(1, pinchStartScaleRef.current * ratio)));
    }
  };

  const handleTouchEnd = (e) => {
    if (e.touches.length < 2) {
      pinchStartDistanceRef.current = 0;
      pinchStartScaleRef.current = imageScale;
    }
  };

  if (!isOpen) return null;

  const previewUrl = getPreviewUrl(url);
  const showPdf = isPdf(url);
  const showImg = isImage(url);
  const showPlaceholder = !showPdf && !showImg;

  return (
    <div
      className="modal-overlay open"
      id="pdf-modal"
      onClick={(e) => e.target.id === 'pdf-modal' && onClose()}
    >
      <div className="modal-box">
        <div className="modal-header">
          <span className="modal-title" id="modal-title">
            {title || 'Document'}
          </span>
          <button
            className="modal-close"
            id="modal-close"
            onClick={onClose}
            aria-label="Close"
          >
            ✕
          </button>
        </div>
        <div className="modal-body">
          {showPdf && (
            <iframe
              className="modal-pdf open"
              id="modal-pdf"
              title="PDF Preview"
              src={previewUrl}
            ></iframe>
          )}

          {showImg && (
            <div
              className="modal-image-wrap open"
              onWheel={handleWheel}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <img
                className="modal-image"
                id="modal-image"
                alt="Certificate Preview"
                src={previewUrl}
                style={{ transform: `scale(${imageScale})` }}
              />
            </div>
          )}

          {showPlaceholder && (
            <div className="modal-placeholder open">
              <svg viewBox="0 0 24 24">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
              <h3>{title || 'Certificate'}</h3>
              <p>Certificate PDF will appear here once uploaded.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
